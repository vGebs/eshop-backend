const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express()
const port = 3003

require('./src/config/app')(app, express)
require('./src/config/mongoose')(mongoose)
require('./src/config/routes')(app)

require('./src/config/listen')(app, port)