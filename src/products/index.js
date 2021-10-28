const express=require('express');
const router=express.Router();

const {ProductsController}=require('./controller');

module.exports.ProductsAPI=(app)=>{
    router.get('/',ProductsController.getProducts)
    router.get('/report',ProductsController.generateReport)
    router.get('/:id',ProductsController.getProduct)
    router.post('/',ProductsController.createProduct)
    

    app.use('/api/products',router);
}