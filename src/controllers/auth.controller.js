import User from '../models/User.js'
import  jwt  from 'jsonwebtoken'
import config from '../config.js'

export const signup = async (req, res) => {

    const {UserName, Email, Password, Telephone, UserPhoto, City} = req.body

    const newUser = new User({
        UserName,
        Email,
        Password: await User.encryptPassword(Password),
        Telephone,
        UserPhoto,
        City
    })

    const savedUser = await newUser.save()
    const Token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 600 // 10 min
    })

    res.status(200).json({Token})
}


export const signin = async (req, res) => {

    const userFound = await User.findOne({Email: req.body.Email})
    
    if(!userFound) return res.status(200).json({Message: 'User not Found'})

    const matchPassword = await User.comparePassword(req.body.Password, userFound.Password)

    if(!matchPassword) return res.status(200).json({Token: null, Message: 'Invalid Password'})

    const Token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 600
    })
    res.json({Token})
}

export const verifyToken = async (req, res) => {
    try{

        const token = req.headers["x-access-token"]
        console.log(token)
    
        if(!token) return res.status(403).json({Message: 'No token provided'})
    
        const decoded = jwt.verify(token, config.SECRET)
    
        const user = await User.findById(decoded.id, {Password: 0})
        if (!user) return res.status(404).json({Message: 'No user found'})
    
        res.status(200).json(user)
    } catch {
        return res.status(401).json({Message: "unauthorized"})
    }
}