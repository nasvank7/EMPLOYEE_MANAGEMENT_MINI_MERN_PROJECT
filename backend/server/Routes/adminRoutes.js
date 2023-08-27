import express from "express";
const router = express.Router();
import {
  authAdmin,
  addEmployee,
  updateEmployee,
  searchEmployee,
  removeEmployee,
  getEmployee,
} from "../Controllers/adminController.js";
import multer from "multer";
// import { protect } from '../middleware/authMiddleware.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
}).single("image");

router.post("/login", authAdmin);
// router.get('/',protect,getHome)
router.get("/employee", getEmployee);
router.post("/addEmployee", addEmployee);
router.put("/employee/:id", updateEmployee);
router.delete("/delete/:id", removeEmployee);
router.get("/search", searchEmployee);

export default router;
