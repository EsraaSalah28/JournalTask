const mongoose = require('mongoose')
const slugify = require('slugify')
const articleSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true

    },
    description:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    slug:{
        type:String,
         required: true,
         unique: true   
    },
    author:{type:mongoose.Schema.Types.ObjectId,ref: 'User'}
})
articleSchema.pre('validate', function(next) {
    if (this.title) {
      this.slug = slugify(this.title, { lower: true, strict: true })
    }
  
    if (this.markdown) {
      this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
  
    next()
  })
  
module.exports=mongoose.model('Article',articleSchema)