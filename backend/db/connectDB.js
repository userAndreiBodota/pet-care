import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1); // 1 failure, 0 status is success
  }
};

export const connectPetDB = async () => {
  try {
    const petConn = await mongoose.createConnection(
      process.env.MONGO_URI_PET_INFO
    );
    console.log(`MongoDB Pet Info Database Connected: ${petConn.client.s.url}`);

    console.log("Pet model is now ready to use.");
  } catch (error) {
    console.log(
      "Error connecting to MongoDB Pet Info Database: ",
      error.message
    );
    process.exit(1); // Exit on error
  }
};
