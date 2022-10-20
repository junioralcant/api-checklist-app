import express, { application } from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Application is running');
});

app.listen(3333, () => console.log('Server is running'));
