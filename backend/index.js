const express = require('express')
const app = express()
const config = require('./config');
const cors = require('cors');
require('dotenv').config()

const port = config.port;

app.use(cors({ credentials: true, origin: config.frontend.base_url }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", require("./routes/authenticationRoute"));
app.use("/users", require("./routes/userRoute"));

app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})