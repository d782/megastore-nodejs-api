const createError=require('http-errors');

module.exports.Response={
    success:(resp,status=200, message="ok", body={})=>{
        resp.status(status).json({message,body});
    },
    error:(resp,error=null)=>{
        const {statusCode,message}=error? error: new createError.InternalServerError();

        resp.status(statusCode).json({message})
    }

}