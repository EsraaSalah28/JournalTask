const express= require('express')
const mongoose= require('mongoose')
const Article=require('./models/article')
const articleRouter=require('./routes/articles')
const methodOverride= require('method-override')
const app =express()
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true,useUnifiedTopology:true})
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/articles',articleRouter)
app.get('/',async(req,res)=>
{ const atricles= await Article.find()
  res.render('articles/index',{atricles:atricles})

}
)
app.listen(3000)