import User from "../models/User.js"

export const verifyUserExist = async (req, res, next) => {
    const user = await User.findOne({UserName: req.body.UserName})
    if (user) return res.status(200).json({Message: 'The user already exists'})
    const email = await User.findOne({Email: req.body.Email})
    if (email) return res.status(200).json({Message: 'The email already exists'})

    next()
}