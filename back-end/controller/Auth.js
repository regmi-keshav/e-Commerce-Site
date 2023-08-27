const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  // this product we have to get from API body

  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    // TODO : this is just temporary, we will use strong password auth
    if (!user) {
      res.status(401).json({ message: "no such email" });
    } else if (user.password === req.body.password) {
      // TODO : We will make addresses independent of login
      res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        addresses: user.addresses,
      });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};