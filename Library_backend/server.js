require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connect } = require('mongoose')

const port = process.env.SERVER_PORT
connectDB = require('./dbconfig/connection') // Database connection


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOption ={
    origin:"*",
    credentials:true,
    }

app.use(cors(corsOption));

connectDB()

//Registration Endpoint
app.post("/register", (req, res) => {
    const fname = req.body.fname;
    const uname = req.body.uname;
    const uemail = req.body.uemail;
    const uphone = req.body.uphone;
    const password = req.body.password;
  
    //encrypt password
      const hashpass = bcrypt.hashSync(password,saltRounds);
  
    var sql = "INSERT INTO libusers (fname, uname, uemail, uphone, password) VALUE (?,?,?,?,?)";
    
    connectDB.query(sql,[fname,uname,uemail,uphone,hashpass],(error,response)=>{
      if (error) {
        res.send(error);
        console.log(error);
      }
      res.json({msg: "User Registered"});
      console.log(response);
  
    });
  
  });
  
  //Login Endpoint
  app.post('/login', async(req,res)=>{
    const {uemail, password} = req.body;
     
    if(!uemail || !password) {
     return res.status(400).json({postMessage:'Email and Password are required'})
    }
  
    const sql = 'SELECT * from libusers WHERE uemail = ?';
    connectDB.query(sql,[uemail], async(err,result) => {
     if(err || result.length === 0) {
       console.log("Error in serching Email: " +err)
     } else {
        const match = await bcrypt.compare(password,result[0].password);
        if(match) {
         const token = jwt.sign({id: result[0].id}, 'my_secretkey', {expiresIn:'1h'});
         res.json({postMessage:'Login Successful', token, uemail});
        } else{
         res.status(401).json({postMessage:'Invalid Password'})
        }
     }
    })
  });
  
  //Authentication middleware using Jwt
  const authenticate = (req, res ,next) => {
    const token = req.header('Authorization');
    console.log('Unextracted Token' +token)
    
    if(!token){
      return res.status(401).json({postMessage:' Unauthorized'})
    }
    const extractedToken = token.split('',1);
    console.log('Actual token' + extractedToken)
  
    try{
      //verify and validate token
      const decoded = jwt.verify(extractedToken,'my_secret_key')
      req.id = decoded.id;
      next();
    }catch(err){
      res.status(401).json({message:"Invalid Token"})
    }
  }
  
  
   app.get('/profile',authenticate, (req,res) => {
    const id =req.id;
    const sql = "SELECT * from libusers WHERE id = ?"
    connectDB.query(sql,[id], (err,result)=>{
      if(err || result.length === 0) {
        res.status(500).json({message:" Error Fetching Details"})
      } else {
        res.json({uemail:result[0].uemail});
      }
    })
  
   })
       
  

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})


