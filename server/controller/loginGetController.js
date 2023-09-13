const loginModel = require('../models/loginSchema')
const loginGetController = async (req,res) => {
    const loginData = await loginModel.find({})
    try {
        res.status(200).json({
            status : "success",
            data:{
                loginData
            }
        })
    } catch (error) {
        res.status(500).json({
            status : "failed",
            message : error
        })
    }
}
module.exports=loginGetController;