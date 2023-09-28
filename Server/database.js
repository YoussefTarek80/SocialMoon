const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connection ${(await conn).connection.host}`);
  } catch (err) {
    console.log("error in connection");
  }
};
module.exports = connectDB;
