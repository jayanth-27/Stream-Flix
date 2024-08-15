const express= require("express");
const app=express();
const mongoose =require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user");
const movieRoute=require("./routes/movies");
const listRoute=require("./routes/list");

dotenv.config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(console.log("DB connection done"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(express.json());

app.use("/api/auth",authRoute);

app.use("/api/user",userRoute);

app.use("/api/movie",movieRoute);

app.use("/api/lists",listRoute);

app.listen(3000, ()=>{
    console.log("Connected backend");
})