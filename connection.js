const mongoose=require("mongoose");


//connection to the database

async function connectMongoDb(url){
  mongoose.connect(url)

}

module.exports={
    connectMongoDb,
}
