import mongoose from 'mongoose';

const dbConnect = async ()=>{
    try{
        await mongoose.connect (process.env.MONGO_CNN)
        console.log('connect to database');
    }
    catch (error){
        console.log('something went wrong', error);
    }
}

export default dbConnect;