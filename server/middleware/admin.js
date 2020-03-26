let admin = (req, res, next) => {
  if (req.user.role === 0) {
    res.send("You are not allowed to post brands");
  }
  next();
};

module.exports = { admin };
