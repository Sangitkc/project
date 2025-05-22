import mongoose from "mongoose";


const bookSchema=mongoose.Schema({
   name:String,
   title:String,
   price:Number,
   category:String,
   image:String
})

const BOOK = mongoose.model("Book",bookSchema)

export default BOOK;