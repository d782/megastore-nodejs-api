const {ObjectId}=require('mongodb')

const {Database}=require('../database/index');


var COLLECTION='users';

const getAll=async ()=>{
    const collection=await Database(COLLECTION);
    return collection.find({}).toArray();
}

const getById=async(id)=>{
    const collection=await Database(COLLECTION);
    return collection.findOne({_id:ObjectId(id)});
}

const create=async (product)=>{
    const collection=await Database(COLLECTION);
    let result=await collection.insertOne(product);
    return result.insertedId;
}


module.exports.UsersService={
    getAll,
    getById,
    create,
}
