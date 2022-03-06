const AnimalRoutes = require('express').Router();
const AnimalController = require('../controllers/animal-controller');
const {GetAllAnimal,GetAnimalById,AddAnimal,UpdateAnimal,DeleteAnimal} = AnimalController;

AnimalRoutes.get("/",GetAllAnimal);
AnimalRoutes.get("/:id",GetAnimalById);
AnimalRoutes.post("/",AddAnimal);
AnimalRoutes.put("/:id",UpdateAnimal);
AnimalRoutes.delete("/:id",DeleteAnimal);

module.exports = AnimalRoutes;