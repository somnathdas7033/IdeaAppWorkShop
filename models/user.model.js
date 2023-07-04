/**
 * this will hold the schema for the users
 * it explain the different fields of user and how it will be stored in the mongodb
 
 */
const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({

//field name is name,userId,here we define type that is String(it is a type)
//every field has constraints which is mandatory so required:true is a constraints
// below we are defining Schema
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        lowercase:true
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    },

},{timestamps:true}); // Timestamps will define creation time and updation time in schema that is why it is used.
/**
 * Define the collection name where it will be stored
 * here collection name is #User,  telling that store whatever field present in #userSchema should be there in collection
 * below line create collection i.e - User.
 */

 /**
  * 
  * mongoose.model("User",userSchema); this line is creating document with name User but we have to store as module */
module.exports= mongoose.model("User",userSchema);//want whole file to be available as a module so store as module.exports



 