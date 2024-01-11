// require('../model/connection');
import fs from 'fs'
import path from 'path'
import userModel from '../Model/img.model.js'
export const add = async (req, res) => {

    try {
      const uploadDir = process.cwd() + '/public/image/';
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const image = req.body.image; // Assuming image is base64-encoded data
      if (image) {
        const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
        const dataBuffer = Buffer.from(base64Data, 'base64');
        const filename = Date.now() + '.png'; // You may want to customize the filename
        const imagePath = uploadDir + filename;

        fs.writeFileSync(imagePath, dataBuffer);
        // const htmlTemplatePath = path.join(__dirname, 'response.html');
        // const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf-8');

        // console.log('i want proper path------------------>',htmlTemplate);
        var obj = {
           img_name: req.body.name,
           img_price: req.body.price,
           img_category: req.body.category,
           image: '/image/' + filename,
        };    

  
        const newuserModel = new userModel(obj);
        let result = await newuserModel.save();
  
        res.json({ success: true,  msg: 'User is created successfully.' });
      } else {
        // Handle the case where no image is provided
        res.json({ success: false,  msg: 'No image provided.' });
      }
    } catch (err) {
      return res.json({ success: false,  err: err, msg: 'this img is exist allready in olready card' });
    }
};
async function dataURLtoFile(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1];

    
 }
export const get = async(req,res)=>{
   
      try {
          const data = await userModel.find({}).sort({ alias: 1 }).lean().exec();
        return res.json({ data: data, success: true});
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, err: err, msg: 'Get Country failed.' });
    }
}
export const getGroupsById = async (req, res) => {
  console.log("mahima")
  try {
      const result = await userModel.aggregate([
          {
              $lookup: {
                  from: 'image_datas',
                  localField: 'image',
                  foreignField: 'p_image',
                  as: 'data'
              }
          }, 
               ]);

      // console.log(result);
     
        // console.log(result[i].image)
        // if(result[i].image==req.body.image)
        // {
          res.json({ data: result, success: true });

        // }
      
      // res.json({ data: result, success: true });
  } catch (err) {
      res.json({ success: false, msg: 'Error in getting grouped data.' });
  }
};