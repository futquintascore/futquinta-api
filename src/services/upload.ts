import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { extname } from 'path';
const rand = () => Math.floor(Math.random() * 1000 + 1000);
import { Game } from '@prisma/client';
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (req, file) => `${Date.now()}_${rand()}${extname(file.originalname)}`,
  },
});

const parser = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(null, false);
    }
    return cb(null, true);
  },
});

export { parser };
