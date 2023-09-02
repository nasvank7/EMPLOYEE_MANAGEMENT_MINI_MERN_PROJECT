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
import multerMiddleware from '../../config/multer.js'

const upload=multerMiddleware.array("image",2)

router.post("/login", authAdmin);
// router.get('/',protect,getHome)

router.get("/employee", getEmployee);
router.post("/addEmployee",upload, addEmployee);
router.put("/employee/:id", updateEmployee);
router.delete("/delete/:id", removeEmployee);
router.get("/search", searchEmployee);

export default router;
