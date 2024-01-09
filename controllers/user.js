
const User=require("../models/user")

async function handleGetAllUsers(req,res){
    const alldbusers=await User.find({})
    return res.json(alldbusers );
}

async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User not found"});  
   return res.json(user);
}

async function handleupdateUserById(req,res){
  const userId = req.params.id;
 const updateData = req.body;
   const updatedUser= await User.findByIdAndUpdate(userId,updateData,{new: true});
    return res.json({ status: "Success",updatedDated:updatedUser });
    
}

// async function handleupdateUserById(req,res){
//   const userId = req.params.id;
//   const updateData = req.body;
//   console.log("updated data",updateData)
//    try {
//     // Use Mongoose to find and update the user
//     const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(updatedUser);
//       } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };




async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
     return res.json({ status: "Successfully deleted"});
}

async function handleCreateNewUser(req,res){
   
    const body = req.body
    //console.log("body", Object.keys(req));
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(200).json({msg:"All fields are required"})
    }
     const result=await User.create(
        {
            firstname:body.first_name,
            lastname:body.last_name,
            email:body.email,
            gender:body.gender,
            jobtitle:body.job_title
        });
        //console.log("result",result)
        return res.status(201).json({msg:"Success",id: result._id})
}





// async function handlerCreateNewUser(req, res) {
//  console.log(req.body)
//     const newUser = new User({
//       firstname: req.body.first_name,
//       lastname: req.body.last_name,
//       email:req.body.email,
//       jobtitle: req.body.job_title,
//       gender: req.body.gender,
      
//     });
// try{
//   const result = await newUser.save();
// res.status(201).json({ message: 'User created successfully', user: result });
// }
//      catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: 'Internal Server mmmmm Error' });
//   }
// }
module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleupdateUserById, 
    handleDeleteUserById,
    handleCreateNewUser
}