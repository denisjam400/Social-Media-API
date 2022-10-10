const UserServices = require("../services/userService");
const {validateUser} =  require('../validators/user.validation')

const User = new UserServices();

module.exports.createUser = async (req, res, next) => {
  try {
    const { error} = validateUser(req.body)
    if(error){
        res.status(403).json({"message" : error.details[0].message})
        next()
      }
    const user = await User.createUser(req.body);

    if (user) {
      res.status(201).json({
        success: true,
        user,
      });
      next()
    }

  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
    next()
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.updateUser(req.params.id, req.body);

    if (user) {
      res.status(201).json({
        success: true,
        user,
      });
      next()
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: e.msg,
    });
    next()
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.deleteUser(req.params.id);

      res.status(200).json({
        success: true,
        message: "User Successfully Deleted!"
      });
      next()

  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
    next()
  }
};

module.exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.getAllUsers();

    if (user) {
      res.status(201).json({
        success: true,
        user,
      });
      next()
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
    next()
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.getUser(req.params.id);

    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
      next()
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
    next()
  }
};

