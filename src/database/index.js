const {MongoClient}=require('mongodb');
const { Config } = require('../config/index');
const debug=require('debug')('app:module-database');

var connection=null;

module.exports.Database=(collection)=>new Promise(async(resolve,reject)=>{
    try{
      if(!connection){
        const client=new MongoClient(Config.mongoUri);
        connection=await client.connect();
        debug('Connected Successfully'); 
      }
      debug('connection is ready!');
      const db=connection.db(Config.mongoDbName);
      resolve(db.collection(collection))
    }catch(err){
      reject(err);
    }
});

