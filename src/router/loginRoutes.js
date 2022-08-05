const express=require('express');
const router=express.Router();
const loginController=require('../loginController')
router.post('/add',loginController.push1)
router.get('/getloginData',loginController.getData)
router.put('/edit',loginController.edit)

module.exports=router