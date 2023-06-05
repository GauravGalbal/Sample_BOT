const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')

const chatbotRoute = require('./routes/chatbotRoute.js');
const summaryRoute = require('./routes/summaryRoute.js');

const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use('/chatbot', chatbotRoute);
app.use('/summary', summaryRoute);

app.listen(PORT, ()=> {
    console.log(`Listening to port ${PORT}`);
});