const {UsersService}=require('./service');
const debug=require('debug')('app:module-users-controller')
const {Response}=require('../common/response');
const httpErrors=require('http-errors');

module.exports.UsersController={
    getUsers:async (req,resp)=>{
        try{
            let users=await UsersService.getAll();
            Response.success(resp,200,'lista de usuarios',users)
        }catch (error) {
            debug(error);
            Response.error(resp);
        }
    },
    getUser:async (req,resp)=>{
        try {
            const {params: {id}}=req;
            let user=await UsersService.getById(id);
            Response.success(resp,200,"usuario",user);
        } catch (error) {
            debug(error)
            Response.error(error)
        }
    },
    createUser:async(req,resp)=>{
        try {
            const {body}=req;
            if (!body||Object.keys(body).length===0) {
                Response.error(resp, new httpErrors.BadRequest())
            }else{
                const insertId=await UsersService.create(body);
                Response.success(resp,201,'usuario agregado',insertId);
            }
            
        } catch (error) {
            debug(error)
            resp.json({message:"internal server error"});
        }
    }
}