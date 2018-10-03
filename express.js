import express from 'express';
const app = express();
const port = 3000;

app.use('/user', require('./routes/user'));
app.use('/users', require('./routes/users'));

app.listen(process.env.PORT || port, () => console.log(`Server is running on port ${port}.`));
