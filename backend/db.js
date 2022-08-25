const mongo=require('mongoose');
const connection = mongo.connect('mongodb+srv://Dinesh:dinesh123@cluster0.l11qx.mongodb.net/app?retryWrites=true&w=majority');

module.exports=connection;