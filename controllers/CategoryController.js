const {Category} = require("../models/index")

const CategoryController = {
    async create(req, res){
        try {
            const category = await Category.create(req.body)
            res.status(201).send([{message:"Category saccessfully created", category}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    },
    async getAll(req, res){
        try {
            const category = await Category.findAll()
            res.status(200).send([{message:"Showing all categories", category}])
        } catch (err) {
            res.status(500).send({message: "There was an error", err})
        }
    },
    async update(req, res) {
        try {
          await Category.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: "Category successfully updated" });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
    },
    async delete(req, res) {
            try {
              await Category.destroy({
                where: {
                  id: req.params.id,
                }
              });
              res.send({ message: `Category with id ${req.params.id} deleted` });
            } catch (error) {
              console.error(error);
              res.status(500).send({ message: "There was a problem", error });
            }
          },
    async getById(req, res) {
        try {
        const category = await Category.findOne({
            where: {
            id: req.params.id,
            }
        });
        res.send({ message: `Category find it`, category});
        } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem", error });
        }
    },  
    async getByName(req, res) {
        try {
        const category = await Category.findOne({
            where: {
            name: req.params.name,
            }
        });
        res.send({ message: `Category find it`, category});
        } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem", error });
        }
    } 
}

module.exports = CategoryController
