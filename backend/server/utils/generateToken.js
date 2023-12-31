import jwt from 'jsonwebtoken'
import { adminUsername } from '../Controllers/adminController.js'

const generateToken=(res,username)=>{
    const token=jwt.sign({username:adminUsername},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !== 'development',
        sameSite:'strict',
        maxAge:30*24*60*60 *1000
    })
}

export default generateToken