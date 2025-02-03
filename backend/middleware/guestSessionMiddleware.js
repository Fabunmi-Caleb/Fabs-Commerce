import { v4 as uuidv4 } from "uuid";

//create a session for guest users
const initGuestSession = (req, res) => {
  // Check if the user is logged in or already has a guest session
  if (!req.session.user && !req.session.guestId) {
    req.session.guestId = uuidv4(); // Generate a unique guest ID
  }
  res.status(200).json({message: "Guest ID / Session set!", guestId: req.session.guestId});
  //   next();
};

export { initGuestSession };
