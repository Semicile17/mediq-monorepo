import mongoose from 'mongoose';
import { app } from './app';



const DB = process.env.DATABASE_CONNECTION_STRING.replace(
  '<DATABASE_PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//connect to database

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
