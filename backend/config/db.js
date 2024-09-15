import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://foodDelUser:hf1YXajQvtSNd4mA@cluster0.ngzwm.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}