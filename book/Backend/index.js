import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 3000
const URL = process.env.MongoDBURl

// connect to mongoDB

try {
   mongoose.connect(URL,{
      useNewUrlParser:true,
      useUnifiedTopology : true
   })
   console.log("Connected to mongoDb")
} catch (error) {
   console.error("Erro ", error)
}

// Defining routes

app.use("/book",bookRoute)



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
