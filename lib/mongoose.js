import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        console.log("DB connected already");
        return;
    }
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
            dbName: "playlists",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
};