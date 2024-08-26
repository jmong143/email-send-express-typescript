import express, { Request, Response } from 'express';
import sendEmailRoutes from './routes/sendEmail';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use(cors());
app.use('/email', sendEmailRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Welcome to express-nodemailer!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});