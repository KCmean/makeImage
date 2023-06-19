import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', (req, res) => {
    res.send('Hello server!');
})

const startServer = async () => {
    // const port = process.env.PORT || 5000;
    app.listen(8080, () => {
        console.log(`Server is running on port http://localhost:8080`);
    })
};

startServer();
