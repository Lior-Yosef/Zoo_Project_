require('dotenv').config();
require('./DB')
const cors = require('cors');
const express = require('express');
const AnimalRoutes = require('./routes/animal-routes');
const app = express();

app.use(cors());
app.use(express.json())

app.listen(process.env.PORT)
app.get('/',(req,res)=>res.send('zoo server connect'));

app.use('/animal',AnimalRoutes);