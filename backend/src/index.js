import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Healthcare Privacy Intelligence Platform Backend');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map