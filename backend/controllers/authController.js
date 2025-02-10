import { mergeCarts } from "../middleware/mergeCartsMiddleware.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  let { email, password } = req.body;
  const guestId = req.session.guestId;

  //change email to lowercase in case the user enters it in capital letters
  email = email.toLowerCase();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid Email or Password");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(501).send("Invalid Email or Password");
    }
    req.session.user = {
      id: user._id,
      email: user.email,
    };
    if (guestId) mergeCarts(req, res);
    // req.session.user_id = user._id; alternative way to set the users session, however the above method is preferred
    res.status(200).json({
      message: "Successfully Logged In",
      firstName: user.firstName,
      lastName: user.lastName,
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const logout = async (req, res) => {
  const user = await User.findById(req.session.user.id);
  if(!user) return res.status(404).send("User not found!")
  try {
    // req.session.user = null; alternative way to remove the session but the destroy method is preferred
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.clearCookie("connect.sid");
      res.status(200).json({
        message: "Successfully Logged Out",
      });
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const guestLogout = async (req, res) => {
  try {
    if (!req.session.guestId) {
      return res.status(400).send("No guest is logged in!");
    }
    req.session.guestId = null;
    res.status(200).json({ message: "Guest Log Out Successful!" });
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
};

//route used ont the frontend to confirm a user has truly logged in, also used to get the logged in users data
const checkSession = async (req, res) => {
  try {
    const user = await User.findById(req.session.user.id);
    if (!user) return res.status(404).send("User Not Found");

    if (req.session && req.session.user) {
      return res.status(200).json({
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
      });
    }
    res.status(401).send("User Not Logged in.");
  } catch (e) {
    res.status(501).send(`Error: ${e}`);
  }
};

const destroySession = async (req, res) => {
  const user = await User.findById(req.session.user.id);
  if (!user) return res.status(404).send("User Not Found");
  try {
    // req.session.user = null; alternative way to remove the session but the destroy method is preferred
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Session Clearing Failed" });
      }
      res.clearCookie("connect.sid");
      res.status(200).json({
        message: "Successfully Cleared Session",
      });
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
}

export { login, logout, guestLogout, checkSession, destroySession };
