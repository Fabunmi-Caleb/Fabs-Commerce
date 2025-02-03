import { mergeCarts } from "../middleware/mergeCartsMiddleware.js";
import Cart from "../models/cartModel.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

//createUser is basically the same as registering a new user.
const createUser = async (req, res) => {
  const guestId = req.session.guestId; // check if the user was a guest, has added to cart and is now registering.
  const { firstName, lastName, email, password, phone, useSameShip } = req.body;

  //Validate Required User Input
  if (!firstName || !lastName || !email || !password || !phone) {
    return res.status(500).send("Please Input all required fields!!");
  }

  //Check if User Already Exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).send("User with that email already exists!");
  }

  //Check if the phone number (if given) is unique
  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    return res.status(400).send("User with that phone number already exists!");
  }

  // encrypting the password (THIS FUNCTIONALITY HAS BEEN MOVED TO THE USER MODEL IN THE 'PRE SAVE' MIDDLEWARE!)
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User(req.body);
  //useSameShip meaning use the address the user entered as his shipping address also
  if (useSameShip) newUser.shippingAddress = { ...newUser.address };
  try {
    await newUser.save();
    // req.session.user.id = newUser._id; // alternative way to set a session for the newly registered user. (keeps the user logged in)
    req.session.user = {
      id: newUser._id,
    }; //set the session for a newly registered user so they don't have to login again when they've registered.
    if (guestId) mergeCarts(req); //check if there is a guest cart instead of always merging carts.
    const newUserData = newUser.toObject();
    // Remove address and ahipping address fields if they are empty so avascipt wont display them as empty obects when in fact they dont exist
    if (!newUserData.address) delete newUserData.address;
    if (!newUserData.shippingAddress) delete newUserData.shippingAddress;
    res.status(200).json({
      message: "Signup Successful",
      firstName: newUserData.firstName,
      lastName: newUserData.lastName,
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const showUser = async (req, res) => {
  const id = req.params.id; //this is the id of the user to be shown
  // const id = req.session.user.id; // grab the users id from the session (id of the user who logged in).
  try {
    const foundUser = await User.findById(id);
    if (!foundUser) {
      return res.status(404).send("User Not Found!");
    }
    const userObject = foundUser.toObject(); //convert the mongoose document to a plain javascript object
    const { password, ...displayableUser } = userObject;
    res.status(200).json(displayableUser);
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

//Special route just to update a users password
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    //check if the user exists
    if (!user) {
      return res.status(404).send("User Not Found!");
    }

    // Check if the current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).send("Incorrect Current password");
    }

    //highly unlikely but if the user entered the same password again as their new password
    if (currentPassword === newPassword) {
      return res
        .status(400)
        .send(
          "Ogbeni change the password nau!(you entered your old password as the new one)"
        );
    }

    //Update the user's password
    user.password = newPassword; //remember we dont need to hash it because that is being done as a pre middleware in our User model
    await user.save();
    res.status(200).send("Password Updated Successfully!!");
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id; // grab the users id from the session
  try {
    const { email, phone } = req.body;

    //Check if User Already Exists (to know if he can change his email to that new email)
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(500).send("User with that email already exists!");
    }

    //Check if the phone number (if given) is unique
    const phoneExists = await User.findOne({ phone });
    if (phoneExists) {
      return res
        .status(500)
        .send("User with that phone number already exists!");
    }

    //this route should not be where a user can change his/her password so exclude it from the req.body;
    const { password, ...updateData } = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      fullName: `${updatedUser.firstName} ${updatedUser.lastName}`,
      email: updatedUser.email,
      phone: updatedUser.phone,
      address: updatedUser.address,
      shippingAddress: updatedUser.shippingAddress,
      role: updatedUser.role,
    });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id; // grab the users id from the session
  try {
    const foundUser = await User.findById(id);
    if (!foundUser) {
      return res.status(404).send("User Not Found!");
    }
    const deletedUser = await User.findByIdAndDelete(id);
    const deletedUserObject = deletedUser.toObject(); //convert the mongoose document to a plain javascript object
    const {
      password,
      _id,
      address,
      shippingAddress,
      role,
      ...displayableDeletedUser
    } = deletedUserObject;
    res
      .status(200)
      .json({ message: "User Deleted Successfully!", displayableDeletedUser });
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

export { createUser, showUser, changePassword, updateUser, deleteUser };
