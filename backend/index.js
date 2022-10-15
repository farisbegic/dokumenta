const express = require('express')
const app = express()
const config = require('./config');
const cors = require('cors');
const router = require('./routes');
require('dotenv').config()

const port = config.port;

app.use(router);
app.use(cors({ credentials: true, origin: config.frontend.base_url }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})