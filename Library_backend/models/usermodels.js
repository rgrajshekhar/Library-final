const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
     username:{
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        index:true,
     },
     email: {
        type: String,
        required:[true, "Please provide a email"],
        unique: true,   
        index:true,
     },
     password:{
        type: String,
        required:[true, "Please provide a password"]
     },
     isVerified:{
        type:Boolean,
        default:false,
     },
     isAdmin:{
        type:Boolean,
        default: false,
     },
     verifyToken : String,
     verifyTokenExpiry:Date,
     forgetPasswordToken: String,
     forgetPasswordTokenExpiry: Date,
     accessToken:String,
     accessTokenExpiry: Date,
     refreshToken:String,
     refreshTokenExpiry:Date,

    }
)

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;