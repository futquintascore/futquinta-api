import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { extname } from 'path';
const rand = () => Math.floor(Math.random() * 1000 + 1000);

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (req, file) => `${Date.now()}_${rand()}${extname(file.originalname)}`,
  },
});

const parser = multer({ storage: storage });

export { parser };
