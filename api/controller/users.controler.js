 import    '../Model/connection.js'
 import UserSchemaModel from '../Model/user.model.js'
import jwt from 'jsonwebtoken'
 
 export const save=async(req,res)=>{

  try {
     var userlist=await UserSchemaModel.find().sort({"_id":-1})
     var _id=(userlist.length==0?1:userlist[0]._id+1)
     var UserDetails={...req.body,"_id":_id,"role":"user"}
     var user=await UserSchemaModel.create(UserDetails)
     if(user)
     {
         return res.status(201).json({"status":"true"})
     }
     else{
         return res.status(500).json({"result":"server not found"})  
 
     }
    }
    catch (error) {
    console.error('Error connecting to the database: ' + error.message);
    res.status(500).json({ message: 'Server error' });
  }
 }
 export const login = async (req, res) => {
    console.log("login");
    const { email, password } = req.body;
  
    try {

    //   const collection = UserSchemaModel.collection(collectionName);
  
      // You should implement proper user validation and hashing of passwords here.
      // For this example, we'll just use a basic query for demonstration purposes.
      const user = await UserSchemaModel.findOne({ email, password });
  
      if (user) {
        // User found, generate a 
        const secretKey = 'your-secret-key'; // Replace with your secret key
        const payload = { email: user.email };
        const options = { expiresIn: '1m' }; // Token expiration time (e.g., 1 hour)
  
        const token = jwt.sign(payload, secretKey, options);
        res.setHeader('Authorization', `Bearer ${token}`);

        // Send the token as a response
        res.status(200).json({ message: 'Login successful', token });
        console.log("success");
      } else {
        // User not found or incorrect credentials
        res.status(401).json({ message: 'Invalid login credentials' });
      }
  
    } catch (error) {
        console.log(error)
      console.error('Error connecting to the database: ' + error.message);
      res.status(500).json({ message: 'Server error' });
    }
  };
  export const get_name=async (req, res) => {
    try {
      const email = req.params.email;
  
      // Search for the user in MongoDB based on the provided email
      const user = await UserSchemaModel.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Send the user details as a JSON response
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
//  export const fetch=async(req,res)=>{
//      var condition_object=url.parse(req.url,true).query
//      var userlist=await UserSchemaModel.find(condition_object)
//      if(userlist.length!=0)
//      return res.status(201).json(userlist)
//  else
//  return res.status(201).json(userlist)
 
 
//  }
 export const fetch = async (req, res) => {
  console.log( req.params.id);

  const id = req.params.id;
  
  try {
    // Connect to MongoDB
    // const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
    // await client.connect();

    // Select the appropriate database and collection
    // const database = client.db('your_database_name');
    // const collection = database.collection('events');

    // Find document by ID
    const result = await UserSchemaModel.findOne({ _id: id });

    if (!result) {
      res.send("Data not found");
    } else {
      res.json(result);
    }

  } catch (error) {
    console.error("Data fetch error: ", error);
    res.status(500).send("Internal Server Error");

  }
}
export const updateUser = async (req, res) => {
  var id = req.body.id;
  console.log(id)
  if (id === undefined) {
      return res.json({ success: false, msg: 'Id Parameter Not Available' });
  }
  delete req.query.id;
  try {
      let result = await UserSchemaModel.findOneAndUpdate(
          { _id: id },
          {
              $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
               
                gender: req.body.gender,
               
              }
          },
      ).lean().exec();

      if (result) {
          res.json({ success: true, msg: 'User is updated successfully.' });
      }
      else {
          return res.json({ success: false, msg: 'User Id not found' });
      }
  }
  catch (err) {
      // return res.json({ success: false, status: status.INVALIDSYNTAX, err: err, msg: 'Update User failed.' });
      return res.json({ success: false,err: err, msg: 'Update User failed.' });

  }
}


export const get_all = async (req, res) => {
  try {
      // const data = await manageProjectModel.find({}).sort({ alias: 1 }).lean().exec();
      const data = await UserSchemaModel.find({}).lean().exec();

      return res.json({ data: data, success: true});
  }
  catch (err) {
      // return res.json({ success: false, status: status.INVALIDSYNTAX, err: err, msg: 'Get Users failed.' });
      return res.json({ success: false, err: err, msg: 'Get Project failed.' });

  }
}