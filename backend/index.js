const express = require('express');
const app = express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const nodeMailer=require('nodemailer');
const cors = require('cors');
const dotenv = require("dotenv").config();
const { Schema, model } = require("mongoose");
const connection = require("./db");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))
// -------------------------------------for dotenv --------------------------------

let PORT=8080

// ----------------------------------------user--Schemas--------------------------------------

const UserSchema = new Schema(
    {
      first_name: String,
      last_name: String,
      mobile: String,
      cart: [
        {
          productId: Schema.Types.ObjectId,
          quantity: Number,
        },
      ],
      email: String
    }
  )
const User = model("User", UserSchema);
// ----------------------------------product Schema--------------------------------
const ProductSchema = new Schema({
    Title: String,
    Brand: String,
    Discription: String,
    Price: Number,
    Image_url: String,
    Category: String
})
const Product = mongoose.model("Product", ProductSchema);
//----------------------------------cart Schema-----------------------------------
// const CartSchema =new Schema({
//     userId: String,
//     cart:[{productId: Schema.Types.ObjectId, quantity: Number}]
// })


// ------------------------------------------product api--------------------------------

app.get('/products', async(req, res) => {
    const products= await Product.find({})
    res.send(products)
})
app.get('/products/:id', async(req, res) => {
    const id=req.params.id
    const product= await Product.findOne({_id:id})
    res.send(product)
})
app.get('/probycat/:catagory', async(req, res) => {
    const catagory=req.params.catagory
    const products= await Product.find({Category:catagory})
    res.send(products)
})
    
// ------------------------------cart -------------need rework ------------------------------
app.get('/cart/:id', async(req, res) => {
    const id=req.params.id
    const cart= await User.findOne({_id:id})
    res.send(cart)
})



// --------------------------------------------login /signup---------------------------------




app.post('/getemail',async(req,res)=>{
    const {email}=req.body
    let user=await User.findOne({email})
  let otp= mail(email)
    if(user){
        const token=jwt.sign({email:user.email,otp},'secret')
        res.send(token)
    }
    else{
        const token=jwt.sign({otp},'secret')
        res.send(token)

        res.send('NONE')

    
    }
    })

app.post("login",async(req,res)=>{
    
    const user=await new User(req.body)
    user.save()
   
    let token=jwt.sign({email:email},'secret')
    res.send(token)
    
    })
    
    // ----------------------function to  send /otp------------------
   async function mail(email){
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

app.listen(PORT, async() =>{
    try {
  await connection;
  console.log(`Listenting on port ${PORT}...`);
} catch {
  console.log("runtime err");
}
}

);