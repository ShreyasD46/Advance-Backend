// import mongoose from "mongoose";
// //require('dotenv').config({path:'./env'})
// import { DB_NAME} from "./constants.js";
// import connectDB from "./db";


// (async ()=>{
//   try {
//     mongoose.connect('$process.env.MONGODB_URL')
//   }
//   catch(error){
//     console.log("ERROR:",error);
//     throw err
//   }
// })() 
import dotenv from "dotenv";
import connectDB from "./index.js"

dotenv.config({
  path:'./env'
})

connectDB()
.then(()=>
{
  app.listen(process.env.PORT || 8000)
  console.log(`Server is running at port: ${process.env.PORT}`)
}

)
.catch((err)=>{
console.log("MONGODB connection failed !!!",err)
})  