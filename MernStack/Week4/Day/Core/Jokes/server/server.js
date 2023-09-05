// server.js
const express = require('express');
const app = express();


require('dotenv').config()
const port = process.env.PORT


require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokesRoutes = require('./routes/jokes.routes');
app.use('/', jokesRoutes);

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
