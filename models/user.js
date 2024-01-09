const mongoose=require("mongoose");


//schema - used to define a structure
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
       unique:true,
    },
    jobtitle:{
        type:String,

    },
    gender:{
        type:String
    },
},
   {timestamps:true}   //it gives time when we created/updated db
);

//schema model ---
//here user-modal name and User-class
const User=mongoose.model("user",userSchema);

module.exports= User;