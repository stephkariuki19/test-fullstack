const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer')
const path = require("path");

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts')
const categoryRoute  = require('./routes/categories')
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

//connecting to db
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log('connected to MongoDB')
    } catch (err) {
      console.error(err);
    }
  };
  connectDB()

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, req.body.name);
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',categoryRoute);


app.listen('5000',()=>{
    console.log('backend is up')
});