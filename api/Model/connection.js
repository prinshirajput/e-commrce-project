import mongoose from "mongoose";
const url='mongodb://127.0.0.1:27017/e-comerce'
mongoose.connect(url)
console.log('succesfully connect mongodb')

// mongoose.connect('mongodb://localhost:27017/baseurl64', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
