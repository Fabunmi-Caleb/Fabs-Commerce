const requireLogin = (req, res, next) => {
  if (!req.session.user || !req.session.user.id) {
    return res.status(401).send("User must be logged in first!");
  }
  next();
};

const requireLoginOrGuest = (req, res, next) => {
  if(!req.session.user && !req.session.guestId){
    return res.status(400).send("You must login or start a guest session to access this resource!");
  }
  next();
};

export { requireLogin, requireLoginOrGuest };
