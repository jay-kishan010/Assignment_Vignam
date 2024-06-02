const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Mongoose model for file metadata
const fileSchema = new mongoose.Schema({
  originalName: String,
  filePath: String,
  mimeType: String,
  size: Number
});

const File = mongoose.model('File', fileSchema);

// API endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  const fileData = {
    originalName: req.file.originalname,
    filePath: req.file.path,
    mimeType: req.file.mimetype,
    size: req.file.size
  };

  const file = new File(fileData);
  file.save()
    .then(() => res.status(201).send('File uploaded successfully'))
    .catch(err => res.status(500).send(err.message));
});

// Connect to MongoDB and start the server
mongoose.connect('mongodb+srv://user:1234@cluster0.elhtqwf.mongodb.net/')
  .then(() => {
    app.listen(8000, () => {
      console.log('Server started on port 8000');
    });
  })
  .catch(err => console.error('Could not connect to MongoDB', err));
