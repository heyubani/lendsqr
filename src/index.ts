import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to lendsql');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Lendsql server is running at http://localhost:${port}`);
});
