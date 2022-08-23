const express = require('express');
const app = express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const nodeMailer=require('nodemailer');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
// -------------------------------------for dotenv --------------------------------
let MONGO="mongodb://127.0.0.1:27017/web17"
let PORT=8080

// ------------------------------------------User Page--------------------------------------

const {Schema,model}=mongoose;
const userSchema=new Schema({
    username:String,
    password:String,

})
const UserModel=model('user',userSchema)



// --------------------------------------------login /signup---------------------------------


app.post('/getemail',async(req,res)=>{
const {email}=req.body
let user=await UserModel.findOne({email})
if(user){
    const token=jwt.sign({email:user.email},'secret')
    res.send(token)
}
else{
    res.send('NONE')    

}
})
app.post("login",async(req,res)=>{
let {email,name}=req.body
const user=await UserModel(
    // ------------------------------make user------------------------------

)
user.save()
let token=jwt.sign({email:email},'secret')
res.send(token)

})

// ----------------------function to  send /otp------------------
function mail(email){
    const mail=await nodeMailer.createTransport({
        host:'smtp.ethereal.email',//hostname
        port:587,
        secure:false,
        auth:{
            user:"",
            pass:''
        }
    })
    let otp=Math.floor(Math.random()*10000)
    
    const info=await mail.sendMail({
        from:"rocio3@ethereal.email",
        to:email,
        text:`OTP is : ${otp}`,
        
    })
    return otp
}


// -------------------------------connection --------------------

mongoose.connect(MONGO).then(
    ()=>(app.listen(PORT,()=>console.log('server started at port 8080')))
)