const {ObjectId}=require('mongodb')

const {Database}=require('../database/index');

const { ProductsUtils }=require('./utils')

var COLLECTION='products';

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

const generateReport=async (name,resp)=>{
    let products=await getAll();
    ProductsUtils.excelGenerator(products,name,resp)
}

module.exports.ProductsService={
    getAll,
    getById,
    create,
    generateReport
}

