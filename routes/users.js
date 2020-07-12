const express = require('express')
const Article = require('./../models/article')
const UserModel=require('../models/users')
const router = express.Router()
router.get('/',async(req,res,next)=>{
try{
const users= await UserModel.find({})
return res.json(users)
}
catch(err)
{
    next(err)
}



})
router.get('/:id',async (req, res, next) => {
    const routeParams = req.params
    const {
        id
    } = routeParams
 try{
     const user = await UserModel.findById(id)
        
         return   res.json(user)
 }
        catch (err)
        {

        next(err)
        }
    })


router.post('/', (req, res) => {
    debugger
    const {FirstName,LastName,dob,email,phoneNo} = req.body

    // construct user instance from usermodel
    const userInstance = new UserModel({
     FirstName,
     LastName,
     dob,
     email,
     phoneNo,
     

    })
    // save user instance in db
    try { 
     const user = await userInstance.save()
        return res.json(user)

        
    }
    catch(err)
    {
    next(err)
    
    }// res.send(" creating instance ")
})
router.patch('/:id',async (req, res,next) => {
   try{ 
 const user = await  UserModel.findByIdAndUpdate(req.params.id,{$set:req.body})

        return   res.json(user)


       }
       catch(err)
       {

       next(err)
       }

  })
   
    // res.send(`updating user with useId =${req.params.id}`)


router.delete('/:id',  async(req, res, next) => {
    try {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    
            return   res.json(user)
    
           }
     catch (err)
     {
           next(err)
     }
    
    
    // res.send(`deleting user with useId =${req.params.id}`)


})


module.exports = router