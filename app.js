const express = require('express');
const app = express();
const port = 3000;

app.use('/users', require('./routes/users'));

app.listen(process.env.PORT || port, () => console.log(`Server is running on port ${port}.`));
