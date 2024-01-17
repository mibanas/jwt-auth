import * as path from 'path';
import multer, { StorageEngine } from 'multer';
import { Request, Response } from "express"

// Définissez un type pour l'objet file
interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: UploadedFile, cb: any) => {
    const allowedImages = {
      'image/png': 'png',
      'image/jpeg': 'jpeg',
      'image/jpg': 'jpg',
    };

    let error: Error | null = null;

    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
        error = new Error('File not authorized!');
    }
    
    cb(error, `${__dirname}/../../public/images`);
  },
  filename: (req, file, cb) => {    
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload