import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { adminUsername } from "../Controllers/adminController.js";

 export const verifyAuth = asyncHandler(async (req, res, next) => {
  let token=req.header('authorization').split(' ')[1];
  token=token.replaceAll('"', '')

  const decodedToken=jwt.verify(token,process.env.JWT_SECRET)
  console.log(decodedToken,"decodetoken/////////////");
  if(decodedToken){
    next()
  }else{
    res.status(401).json({error:'verification failed'})
  }
  
});


