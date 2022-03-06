const animal = require('../models/animal_model');

const GetAllAnimal = async (req, res) => {
    await animal.find((err, result) => {
        if (err) return res.status(404).send({ massage: err });
        res.send(result)
    }).clone();
};

const GetAnimalById = async (req, res) => {
    await animal.findById()
        .then((result) => res.send(result))
        .catch(err => res.status(404).send({ massage: err }));
};

const AddAnimal = async (req, res) => {
    await animal.create(req.body)
        .then((result) => res.send(result))
        .catch(err => res.status(404).send({ massage: err }));
};

const UpdateAnimal = async (req, res) => {
    await animal.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.send(result))
        .catch(err => res.status(404).send({ massage: err }));
};

const DeleteAnimal = async (req , res)=>{
    await animal.findByIdAndDelete(req.params.id)
    .then((result) => res.send(result))
    .catch(err => res.status(404).send({ massage: err }));
};

module.exports={GetAllAnimal,GetAnimalById,AddAnimal,UpdateAnimal,DeleteAnimal}