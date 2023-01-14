const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const authRouter = require('./routes/authRoute')

// Call database(mongoDB)
const db = require('./config/dbconnect');
db();


// register
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authRouter);


// Error handlernpm 
const { notFound } = require('./middlewares/errorHandler');
const { errorHandler } = require('./middlewares/errorHandler');
app.use(notFound);
app.use(errorHandler); // following with install "npm i express-async-handler"


// start the Server running
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}!`);
});