const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());


const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


app.use("/uploads", express.static(uploadDir));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use(express.json());


app.post("/api/comics", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File upload failed!" });
  }

  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required!" });
  }

  const filename = req.file.filename;
  const newComic = {
    _id: filename,
    title,
    description,
    coverUrl: `http://localhost:${PORT}/uploads/${filename}`,
  };

  const comicsFile = path.join(__dirname, "comics.json");
  let comicsData = [];

  if (fs.existsSync(comicsFile)) {
    comicsData = JSON.parse(fs.readFileSync(comicsFile));
  }

  comicsData.push(newComic);
  fs.writeFileSync(comicsFile, JSON.stringify(comicsData, null, 2));

  res.status(201).json({ message: "Comic uploaded successfully!", comic: newComic });
});


app.get("/api/comics", (req, res) => {
  const comicsFile = path.join(__dirname, "comics.json");

  if (fs.existsSync(comicsFile)) {
    const comicsData = JSON.parse(fs.readFileSync(comicsFile));
    return res.status(200).json(comicsData);
  } else {
    return res.status(404).json({ error: "No comics found!" });
  }
});


app.get("/uploads/:filename", (req, res) => {
  const filePath = path.join(uploadDir, req.params.filename);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: "File not found!" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
