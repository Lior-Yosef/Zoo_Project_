require('dotenv').config();
require('./DB')
const cors = require('cors');
const express = require('express');
const AnimalRoutes = require('./routes/animal-routes');
const EmployeeRoutes = require('./routes/employees-routes');
const app = express();

app.use(cors());
app.use(express.json())


app.use('/animal',AnimalRoutes);
app.use('/employee', EmployeeRoutes);


app.listen(process.env.PORT)
app.get('/',(req,res)=>res.send('zoo server connect'));