import mongoose from 'mongoose';

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_AUTHENTICATION"
    }).then(()=>{
        console.log("Successfully connected to database");
    }).catch((err)=>{
        console.log(`Facing some problem while connecting to the database ${err}`);
    })
}