const {ProductsService}=require('./service');
const debug=require('debug')('app:module-products-controller')
const {Response}=require('../common/response');
const httpErrors=require('http-errors');

module.exports.ProductsController={
    getProducts:async (req,resp)=>{
        try{
            let products=await ProductsService.getAll();
            Response.success(resp,200,'lista de productos',products)
        }catch (error) {
            debug(error);
            Response.error(resp);
        }
    },
    getProduct:async (req,resp)=>{
        try {
            const {params: {id}}=req;
            let product=await ProductsService.getById(id);
            Response.success(resp,200,"producto",product);
        } catch (error) {
            debug(error)
            Response.error(error)
        }
    },
    createProduct:async(req,resp)=>{
        try {
            const {body}=req;
            if (!body||Object.keys(body).length===0) {
                Response.error(resp, new httpErrors.BadRequest())
            }else{
                const insertId=await ProductsService.create(body);
                Response.success(resp,201,'producto agregado',insertId);
            }
            
        } catch (error) {
            debug(error)
            resp.json({message:"internal server error"});
        }
    },
    generateReport:(req,resp)=>{
        try {
            ProductsService.generateReport('inventario',resp);
        } catch (error) {
            debug(error)
            Response.error(resp)
        }
    }
}