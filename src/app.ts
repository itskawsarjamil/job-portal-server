import cors from 'cors';
import express from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import NotFound from './app/middleware/notFound';
import router from './app/routes';
export const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from job portal backend');
});

app.use('/api/v1', router);

app.use(globalErrorHandler);
app.use('*', NotFound);
