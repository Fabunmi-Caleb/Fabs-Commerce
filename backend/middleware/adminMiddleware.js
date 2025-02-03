import User from "../models/userModel.js";

const isAdmin = async (req, res, next) => {
  const id = req.session.user ? req.session.user.id : null;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).send("User Not Found!");
  }

  if (user.role === "admin") {
    return next();
  }
  return res
    .status(400)
    .json({ message: "User must be an admin to perform this action" });
};

const isOwnerOrAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.user.id); //id of the logged in user.
    const targetUser = await User.findById(req.params.id); //id of the actual user that owns the resource

    if (!targetUser) {
      return res.status(404).send("User Not Found!");
    }

    // Check if the logged-in user is the owner of the account or an admin
    if (
      targetUser._id.toString() === user._id.toString() ||
      user.role === "admin"
    ) {
      return next();
    } else {
      res
        .status(400)
        .send("You must be the owner of this resource or an admin!");
    }
  } catch (e) {
    res.status(501).send(`Error: ${e.message} ${e.stack}`);
  }
};

export { isAdmin, isOwnerOrAdmin };
