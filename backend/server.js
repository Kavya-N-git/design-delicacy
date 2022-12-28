//this is entry point of application
//importing app module , config.env module , database
const app = require('./app');
const dotenv=require('dotenv');
const connectDatabase=require('./config/database'); // call after configuring  file bcoz need to fetch path of DB_URI

//configuring config folder 
dotenv.config({path:"backend/config/config.env"});

//connecting to db
connectDatabase()


//making server
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})