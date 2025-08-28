import express from 'express';
import cors from 'cors';
import multer from 'multer';
const app = express();
const port = 3001;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Healthcare Privacy Intelligence Platform Backend');
});
const sensitiveWords = ['John Doe', 'Anytown', 'common cold'];
const redactText = (text) => {
    let redactedText = text;
    sensitiveWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        redactedText = redactedText.replace(regex, '[REDACTED]');
    });
    return redactedText;
};
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const fileContent = req.file.buffer.toString('utf-8');
    const redactedText = redactText(fileContent);
    res.json({ redactedText });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
