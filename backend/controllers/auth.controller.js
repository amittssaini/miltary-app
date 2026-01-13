const AuthService = require("../services/auth.service")
const AuthServiceInstance = new AuthService();

const register = async (req, res) => {
  try {
    const result = await AuthServiceInstance.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await AuthServiceInstance.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports={login,register}