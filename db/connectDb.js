import mongoose from "mongoose";


const connectDb = async (DATABASE_URL)=>{
    const DB_OPTIONS = {
        dbname: 'taskdb',
    }

    try{
       await  mongoose.connect(DATABASE_URL,DB_OPTIONS)
       console.log("db connected...")
    }catch(err){
        console.log(err)
    }
}


export default connectDb