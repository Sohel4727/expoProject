const loginModel = require('../models/loginSchema');
const loginController = async (req, res) => {
    console.log("Received request:", req.body);
    const { email, password } = req.body;

    try {
    const login = new loginModel({ email, password });
    await login.save();
    res.status(200).json({
        status: "success",
        data: {
            login
        }
    });
} catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
}
}
module.exports = loginController;
