//db can be connected via server.js but it will be heavy hence new file is created 
const mongoose = require("mongoose");

mongoose.set('strictQuery', true) //to avoid deprecationWarning
//calling connection using function 
const connectDb = ( ) =>{
    //connection

    mongoose.connect(process.env.DB_URI).then((data)=>{
            console.log(`mongodb conncected with server: ${data.connection.host}`);
        }).catch((err)=>{
            console.log(err)
        })

}

//exporting connection function
module.exports=connectDb



