const User = require("../models/user.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
   async register(data) {
    const { name, email, password, role, baseId } = data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      baseId: role === "Admin" ? null : baseId,
    });

    return { message: "User registered successfully" };
  }

   async login(data) {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        baseId: user.baseId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        baseId: user.baseId,
      },
    };
  }
}

module.exports = AuthService;
