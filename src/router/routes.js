const router = require("express").Router();
const loginRoutes=require("../router/loginRoutes")

router.use('/login',loginRoutes);


module.exports=router
