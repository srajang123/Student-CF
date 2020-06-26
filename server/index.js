const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const jwtSecretKey='MySecretKey';
const { urlencoded } = require('express');
const mongoConnect = require('./util/database').mongoConnect;
const getDb=require('./util/database').getDb;
let PORT=5000;
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
let db;
/*
app.use((res, resp, next) => {
    resp.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    resp.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/

app.get('/',(req,res,next)=>{
    console.log('request Accepted');
})
app.get('/view',(req,res,next)=>{
    db.collection('list').find({}).toArray()
    .then(data=>res.send(JSON.stringify(data)))
    .catch(err=>console.log('Error'));
});
app.post('/add',(req,res,next)=>{
    let data=req.body;
    db.collection('list').insertOne(data)
    .then()
    .catch(err=>console.log(err));
});
app.post('/register',(req,res,next)=>{
    console.log('register');
    let data=req.body;
    db.collection('users').insertOne(data)
    .then(re=>res.end()
    )
    .catch(err=>console.log('Error: '+err));
});
app.post('/login',(req,res,next)=>{
    let {uname,pass}=req.body;
    db.collection('users').findOne({uname:uname,pass:pass})
    .then(re=>
        {
            if(re===null)
                res.status(401).send('Wrong Credentials');
            else
            {
                const token=jwt.sign(re,jwtSecretKey,{
                    algorithm:'HS256'
                })
                res.cookie("token",token).end();
            }
        })
    .catch(err=>console.log(err));
})
mongoConnect(() => {
    db = getDb();
    app.listen(PORT, () => console.log(`Server Up and running at ${PORT}`));
});