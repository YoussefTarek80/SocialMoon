const user = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const register = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new user({
      img: req.file.filename,
      name: req.body.name,
      surname:req.body.surname,
      email: req.body.email,
      password: hashedPassword,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      gender: req.body.gender,
      friends:[]
    });
    try {
      await newUser.save();
      res.status(200).send("Registered....");
    } catch (error) {
      res.status(400).send("Cant Register....");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
const login = async (req, res) => {
  try {
    let existEmail = await user.findOne({ email: req.body.email }).exec();
    if (!existEmail) {
      return res.status(400).send("Email or password not Match");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      existEmail.password
    );
    if (!validPassword) {
      return res.status(400).send("Email or password Not match");
    }
    const token = jwt.sign({ userid: existEmail._id }, "keysecret");
    res.header("x-token", token);
    const UserIdLogin = existEmail._id;
    res.send({ message: "Login Successfully", token,UserIdLogin});
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
module.exports = {
  register,
  login,
};
