import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/cloudArch");
    /**
     * useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: true,
       useCreateIndex: true
     */


    console.log('Conexion a la base de datos');
  } catch (error) {
    console.log(error);
  }
};


