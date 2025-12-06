import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import NotFound from './app/middleware/notFound';
import router from './app/routes';
export const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from job portal backend');
});

app.use('/api/v1', router);

app.use(globalErrorHandler);
app.use('*', NotFound);
