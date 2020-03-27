const express = require('express');
const path = require('path');
const app = express();
const port = 8085;


// Middleware
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());


app.listen(port, () => console.log(`Server is running on ${port}...`));
