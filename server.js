const express  = require('express');
const serverConfig =require('./configs/server.config');
const mongoose=require('mongoose');
const dbConfig= require('./configs/db.config');
//const{ init }=require('./models/user.model');
const userModel=require('./models/user.model');


const app = express();
/**
 * logic to connect to mongoDB and create an Admin user
 * need to have a mongoDB up and running in local machine
 */
/**
 * below line 15 is used to tell go and connect with mongoose
 */
mongoose.connect(dbConfig.DB_URL);// DB_url is url of mongodb

//below line is used to track connection therefore we store it in variable
const db=mongoose.connection;



db.on("error",()=>{
    console.log("Error while connecting to DB");// error handler,connecting to mongodb if some error comes it will through this
});

db.once("open",()=>{
    console.log("DB is connected");// if connection is succeesfull,this handler will execute


    init();
});

async function  init(){
    /**
     * initialize the mongodb
     * need to create the admin user
     */
    /**
     * check if admin user is already present or not
     */
    let admin=userModel.findOne({           // checking whether admin is present beforehand or not,if not then create
        userId:"admin"
    })
    if(admin)
    {
        console.log("Admin user already present");
        return;
    }
     // if admin is not present earlier then it will create
      admin =await userModel.create({         // when promise there we have to wait for the fulfilment there use await and along with await always use Async before function
        name:"Vishwa Mohan",
        userId:"admin",                // this whole block will return #promise which is always futuristic can be created or cannot be
        email:"kankvish@gmail.com",
        userType:"ADMIN",
        password:"Welcome1"
    });
    console.log(admin);
}



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})




