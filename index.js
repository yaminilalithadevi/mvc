//const users =require("./MOCK_DATA.json")
const express=require("express");
const fs=require("fs")
//const cors =require("cors")
const app=express();

const userRouter=require("./routes/user")
const {connectMongoDb}=require('./connection')

const { logReqRes}=require("./middlewares")
//const body = require('body-parser');

//connection Of Mongo DB
connectMongoDb("mongodb://localhost:27017/youtube-app-1").then(()=>
console.log("MongoDB connected"));

//Routes

app.use(express.json());
app.use("/api/users",userRouter)
 app.use(logReqRes("log.txt"));
//app.use(cors())


//we need to add middle ware -plugin...so that body data is loaded here
 //app.use(express.urlencoded({extended : false}))
app.use(logReqRes('log.txt'))

app.listen(3000,()=>console.log("Server is running at port 3000"));




//printing all first names  in users like list,join is used to remove (,) in the list

//create new user
 
// app.patch("/api/users/:id", async (req, res) => {
//     try {
//       // Update the user with the specified ID
//       const updatedUser = await User.findByIdAndUpdate(req.params.id, { lastname: 'Changed' }, { new: true });
  
//       // If the user is not found, respond with a 404 error
//       if (!updatedUser) {
//         return res.status(404).json({ error: "User not found" });
//       }
  
//       // Respond with the updated user data
//       return res.json({ status: "Success", user: updatedUser });
//     } catch (error) {
//       // Handle any errors that might occur during the database update
//       console.error("Error updating user:", error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   });




// .delete( async (req, res) => {
//     try {
//       // Attempt to find and delete the user by ID
//       const deletedUser = await User.findByIdAndDelete(req.params.id);
  
//       // If the user is not found, respond with a 404 error
//       if (!deletedUser) {
//         return res.status(404).json({ error: "User not found" });
//       }
  
//       // Respond with a success message
//       return res.json({ status: "Successfully deleted", user: deletedUser });
//     } catch (error) {
//       // Handle any errors that might occur during the database operation
//       console.error("Error deleting user:", error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   });








//here we are finding details by using id
//here :id is dynamic which we can give any number


