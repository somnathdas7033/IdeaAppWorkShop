/*const express  = require('express');
const serverConfig =require('./configs/server.config');
const mongoose=require('mongoose');
const dbConfig= require('./configs/db.config');


const app = express();
/**
 * logic to connect to mongoDB and create an Admin user
 * need to have a mongoDB up and running in local machine
 */
/*mongoose.connect("dbConfig.DB_URL");
const db=mongoose.connection;

db.on("error",()=>{
    console.log("Error while connecting to DB");
});

db.once("open",()=>{
    console.log("DB is connected");
});



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})*/




const express  = require('express');
const serverConfig =require('./configs/server.config');
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model');
//const bcrypt = require('bcrypt');

const app = express();


/**
 * Logic to connect to MongoDB and create an ADMIN user
 * Need to have the mongodb up and running in your local machine
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("DB is connected");
});



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started on the port number ${serverConfig.PORT}` );
})

