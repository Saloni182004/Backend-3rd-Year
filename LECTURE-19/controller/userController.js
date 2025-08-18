const users=require("../model/userSchema");

module.exports.getAllUsers=async (req, res) => {
  let allUsers = await Users.find();
  res.json({
    success: true,
    data: allUsers
  });
}

module.exports.getOneUser=async (req, res) => {
  let { id } = req.params;
  console.log(id)
  let userExist = await Users.findOne({ _id: id }).populate("blogs")
  console.log(userExist);
  if(userExist){
    res.json({
    success: true,
    data: userExist
  });
  }
}

module.exports.postUser= async (req, res) => {
  let { email, username, password } = req.body;
  let newUser = new Users({
    email: email,
    username: username,
    password: password
  });
  await newUser.save();
  res.json({
    success: true,
    data: newUser,
    message: "user added successfully!!!"
  });
}