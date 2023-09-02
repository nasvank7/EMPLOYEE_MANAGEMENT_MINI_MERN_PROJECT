import multer from 'multer';
import path from 'path';
import express from 'express';
const app = express();


const max = 50 * 1024 * 1024;
const multerMiddleware = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
  limits: {
    fileSize: max
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
   
    return res.status(400).json({ message: err.message });
  } else if (err) {
    
    return res.status(500).json({ message: "Internal Server Error" });
  }
  next();
});

export default multerMiddleware;
