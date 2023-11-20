import UserModel from "../models/User.js";

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user || user.password !== req.body.password) {
      return res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

//logout

export const logout = (req,res)=>{
  res.clearCookie("access_token",{
    sameSite: "none",
    secure: true
  }).status(200).json("user hass been logged out.")
};
