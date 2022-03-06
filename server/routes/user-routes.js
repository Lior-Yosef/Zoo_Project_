const UserRoutes = require('express').Router();
const UserController = require('../controllers/user_controller')

UserRoutes.post('/register',UserController.register);
UserRoutes.post('/login',UserController.login);


module.exports = UserRoutes;