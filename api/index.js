const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer')
const path = require("path");
const cors = require('cors');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts')
const categoryRoute  = require('./routes/categories')
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));

const PORT = 5000;

app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true,  // Include credentials (e.g., cookies)
}));

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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});