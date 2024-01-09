const express=require("express");
const router=express.Router()
const { handleGetAllUsers,
    handleGetUserById,
    handleupdateUserById,
     handleDeleteUserById,
     handleCreateNewUser,
    }=require("../controllers/user")


    
router.route("/")
    
.get(handleGetAllUsers)
.post(handleCreateNewUser)


router
.route("/:id")
.patch(handleupdateUserById)
.get(handleGetUserById)
.delete(handleDeleteUserById);

module.exports=router;
// Fetch firstname ,email from DB
// router.get("/users",async(req,res)=>{
//     const alldbusers=await User.find({})
//     const html= `
//     <ul>
//     ${alldbusers.map( (user)=> `<li> ${user.firstname} -${user.email} </li>`).join("")}
//     </ul>
//    `
//     res.send(html)
// })


 
//get all records from db
//router.get("/", handleGetAllUsers)
//post details in db
//router.post("/",handlerCreateNewUser)



