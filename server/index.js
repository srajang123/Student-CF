const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { urlencoded } = require('express');
const mongoConnect = require('./util/database').mongoConnect;
const getDb=require('./util/database').getDb;
let PORT=5000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
let db;
app.use((res, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    resp.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/',cors(),(req,res,next)=>{
    console.log('request Accepted');
})
app.get('/view',cors(),(req,res,next)=>{
    db.collection('list').find({}).toArray()
    .then(data=>res.send(JSON.stringify(data)))
    .catch(err=>console.log('Error'));
});
app.post('/add', cors(),(req,res,next)=>{
    let data=req.body;
    db.collection('list').insertOne(data)
    .then()
    .catch(err=>console.log(err));
});
mongoConnect(() => {
    db = getDb();
    app.listen(PORT, () => console.log(`Server Up and running at ${PORT}`));
});