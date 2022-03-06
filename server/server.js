require('dotenv').config();
require('./DB')
const cors = require('cors');
const express = require('express');
const AnimalRoutes = require('./routes/animal-routes');
const EmployeeRoutes = require('./routes/employees-routes');
const app = express();
const passport = require("passport");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

require('./config/passport')(passport);
app.use(passport.initialize());

app.listen(process.env.PORT)

app.use('/animal', passport.authenticate('jwt', { session: false }),AnimalRoutes);
app.use('/employee', passport.authenticate('jwt', { session: false }), EmployeeRoutes);


app.get('/',(req,res)=>res.send('zoo server connect'));