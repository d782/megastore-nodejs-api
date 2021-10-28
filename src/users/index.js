const express=require('express');
const router=express.Router();

const {UsersController}=require('./controller');

module.exports.UsersAPI=(app)=>{
    router.get('/',UsersController.getUsers)
    router.get('/:id',UsersController.getUser)
    router.post('/',UsersController.createUser)
    

    app.use('/api/users',router);
}