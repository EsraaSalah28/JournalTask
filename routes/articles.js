const express = require('express')
const router = express.Router()
router.get('/new',(req,res)=>{
res.render('articles/new')
res.send('in articles')

})
router.post('/',(req,res)=>{

    
})
module.exports= router