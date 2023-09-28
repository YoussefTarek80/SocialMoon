const user = require("../models/UserModel");
const GetUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const getUser = await user.findById(userId);

    if (getUser) {
      return res.json(getUser); 
    }

    return res.status(404).json({ message: "User not found" });
  } catch (err) {
    console.error(err); // Log the actual error
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  GetUser,
};
