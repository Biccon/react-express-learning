# react-express-learning 
After clone this project, run *npm install*.
Before running server, run *npm run-script preinstall* to install nodemon.
And, run *npm run-script start* to run server!
```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Running'));
```