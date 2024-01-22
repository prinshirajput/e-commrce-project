import authModel from '../Model/authmodel.js'
import userModel from '../Model/user.model.js'
import nodemailer from 'nodemailer'

// export const sendEmail = async (req, res) => {
//     try {
//       var email = req.body && req.body.email ? req.body.email : '';
//       var msg = req.body && req.body.msg ? req.body.msg : '';

// //       var user = await userModel.findOne({ email: email }).lean().exec();
// //   console.log(user)
//       if (0) {
//         res.json({ success: false, msg: 'Authentication failed. User not found.' });
//       } else {
//         let transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//             user: email,
//             pass: 'uixv laul bjpd tqcc'
//           }
//         });
//         let mailOptions = {
//           from: email,
//           to: 'mailto:mahimagarg1602@gmail.com',
//           subject: 'Hello ✔',
//           text: 'Hello world?',
//           html: `
//           <h1>Password Reset Request</h1>
//           <b>Welcome</b>
//             <p>This is your mail id ${email} </p>
//             <p>${msg}/p>
          
//             <p>Thank you</p>
//           `,
//         };
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             return console.log(error);
//           }
//           console.log('Message sent: %s', info.messageId);
//           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//           // res.status({ status: status.OK });
//         return  res.json({ success: true,  msg: 'Send mail in your given mail id ' });
  
//         });
  
//       }
//     } catch (e) {
//       console.log("e", e)
//       return res.json({ success: false, status: statusCode.INVALIDSYNTAX, err: e, msg: 'Error in login.' });
//     }
//   }
// const Imap = require('imap');
// const { simpleParser } = require('mailparser');

import Imap from 'imap'
import { simpleParser } from 'mailparser';

// export const sendEmail = async (req, res) => {
//   const imap =new Imap({
//     user: 'mahimagarg1602@gmail.com',
//     password: 'uixv laul bjpd tqcc',
//     host: 'imap.gmail.com',
//     port: 993,
//     tls: true,
//     tlsOptions: { rejectUnauthorized: false },
//   });
//   // Function to open the mailbox and fetch emails
//   function openInbox(cb) {
//     imap.openBox('INBOX', true, cb);
//   }
//   // Function to fetch emails from the INBOX
//   function fetchEmails() {
//     openInbox((err, box) => {
//       if (err) throw err;
//       // Search criteria (all emails)
//       const searchCriteria = ['ALL'];
//       // Fetch options
//       const fetchOptions = {
//         bodies: '',
//         markSeen: false,
//       };
//       // Fetch emails
//       const fetch = imap.seq.fetch(box.messages.total + ':1', fetchOptions);
  
//       // Handle each fetched email
//       fetch.on('message', (msg) => {
//         msg.on('body', (stream) => {
//           // Parse email using mailparser
//           simpleParser(stream, (err, parsed) => {
//             if (err) throw err;
//             // Access parsed email data
//             console.log('Subject:', parsed.subject);
//             console.log('From:', parsed.from.text);
//             console.log('Body:', parsed.text);
//             // If you need more details, check the 'parsed' object
//             // console.log(parsed);
//           });
//         });
//       });
//       // Log any fetching errors
//       fetch.on('error', (err) => {
//         console.error('Error fetching emails:', err);
//       });
//       // Log the end of fetching
//       fetch.on('end', () => {
//         console.log('Done fetching emails');
//         // Logout and close the connection
//         imap.end();
//       });
//     });
//   }
//   // Connect to the IMAP server
//   imap.connect();
  
//   // Handle connection errors
//   imap.once('error', (err) => {
//     console.error('IMAP connection error:', err);
//   });
  
//   // Handle successful connection
//   imap.once('ready', () => {
//     console.log('IMAP connection ready');
//     fetchEmails(); // Fetch emails once connected
//   });
//   // Handle connection end
//   imap.once('end', () => {
//     console.log('IMAP connection ended');
//   });
  
//   // Handle connection close
//   imap.once('close', () => {
//     console.log('IMAP connection closed');
//   });
// }

export const sendEmail = async (req, res) => {
  console.log(req.body)
  const msg=req.body.msg

  const email=req.body.email
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mahimagarg1602@gmail.com',
    pass: 'uixv laul bjpd tqcc',
  },
});
// Email options
let mailOptions = {
  from: 'mahimagarg1602@gmail.com',
  to: `${email}`, // Replace with the recipient's email address
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: `<b>${msg}</b>`,
};
// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("-------->",error);
 }

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  res.json({ success: true, msg: 'Email sent successfully' });
});
};