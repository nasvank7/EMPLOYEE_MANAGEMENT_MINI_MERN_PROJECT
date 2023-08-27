import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { adminUsername } from "../Controllers/adminController";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded,"heloooooooo");
      if (decoded.username === adminUsername) {
       
        req.user = {
          username: decoded.username, 
        };
        next();
      } else {
        res.status(401).json({ message: "Invalid user" });
      }
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});


