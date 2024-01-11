// import jwt from 'jsonwebtoken'
// // Middleware to verify JWT token
// // const verifyToken = (req, res, next) => {
// //   const token = req.headers['authorization']; // Assuming token is sent in the "Authorization" header
// // console.log(token)
// //   if (!token) {
// //     return res.status(401).json({ message: 'No token provided' });
// //   }

// //   jwt.verify(token, 'your-secret-key', (err, decoded) => {
// //     if (err) {
// //         console.log(err)
// //       return res.status(401).json({ message: 'Invalid token' });
     
// //     }

// //     // Token is valid, you can access decoded data
// //     req.user = decoded;
// //     next(); // Continue to the next middleware or route
// //   });
// // };

// // Middleware to verify JWT token

// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization']; // Assuming token is sent in the "Authorization" header
// console.log(token)
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, 'your-secret-key', (err, decoded) => {
//     if (err) {
//       console.error('Token verification error: ' + err.message);
//       return res.status(401).json({ message: 'Invalid token' });
//     }

//     // Token is valid, you can access decoded data
//     req.user = decoded;
//     next(); // Continue to the next middleware or route
//   });
// };

// export default verifyToken ;
import jwt from 'jsonwebtoken'
// Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization']; // Assuming token is sent in the "Authorization" header
// console.log(token)
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, 'your-secret-key', (err, decoded) => {
//     if (err) {
//         console.log(err)
//       return res.status(401).json({ message: 'Invalid token' });
     
//     }

//     // Token is valid, you can access decoded data
//     req.user = decoded;
//     next(); // Continue to the next middleware or route
//   });
// };

// Middleware to verify JWT token

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']; // Fix typo here
  console.log("token-->",typeof bearerHeader )

  
    if (typeof bearerHeader !== 'undefined') {
      // const bearer = bearerHeader.split(' ');
      // const token = bearer[1];
      req.token = bearerHeader;
      next();
    } else {
      res.send({
        result: 'Token is not valid.',
      });
    }
  }
  export default verifyToken;