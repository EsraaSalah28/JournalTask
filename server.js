const express= require('express')
const articleRouter=require('./routes/articles')
const app =express()
app.set('view engine','ejs')
app.use('/articles',articleRouter)
app.get('/',(req,res)=>
{ const atricles =[{
title:'Test Article',
createdAt: new Date(),
description:'Test description'

},
{
  title:'Test Article2',
  createdAt: new Date(),
  description:'Test description 2'
  
  }
]
  res.render('articles/index',{atricles:atricles})

}
)
app.listen(5000)