let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;

let _db;
const URL='mongodb://localhost:27017/';
const mongoConnect = (callback) => {
    MongoClient.connect(URL)
        .then(client => {
            console.log("Connected");
            _db=client.db('stutTest');
            callback(client);
        })
        .catch(err => console.log(err));
}
const getDb=()=>{
    if(_db)
        return _db;
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;