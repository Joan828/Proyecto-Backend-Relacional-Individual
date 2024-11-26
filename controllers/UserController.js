const {User, Order, Product, OrderProduct, Token, Sequelize} = require("../models/index")
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize;

const UserController = {
    async create(req, res, next){
        try{
          if(!req.body.password) return res.status(400).send("Rellena tu contraseña")
            const password = bcrypt.hashSync(req.body.password,10)
            const user = await User.create({...req.body, password:password, role:"user"})
            res.status(201).send({message:"User created successfully",user})
        }catch(err){  
            next(err)
        }
    },
    async getAll(req, res) {
        try {
          const users = await User.findAll({
            include: { 
              attributes: ["description"],
              model: Order, 
              include:{
                model: Product, 
                attributes: ["name", "price"]
              }
             }
          });
          res.status(200).send({message: "Showing all the users", users});
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      // Aquí habría que hacer el delete de nuestro user, que tiene que borrar sus pedidos en vez de sus posts, como lo hace en este ejemplo
    //   async delete(req, res) {
    //     try {
    //       //eliminar las publicaciones del usuario
    //       await Post.destroy({
    //         where: {
    //           UserId: req.params.id,
    //         },
    //       });
    //       //eliminar el usuario
    //       await User.destroy({
    //         where: {
    //           id: req.params.id,
    //         },
    //       });
    //       res.send({ message: `User with id ${req.params.id} deleted` });
    //     } catch (error) {
    //       console.error(error);
    //       res.status(500).send({ message: "There was a problem", error });
    //     }
    //   },
      async update(req, res) {
        try {
          await User.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          res.send({ message: "User successfully updated" });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem", error });
        }
      },
      async login(req, res) {
        const user = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (!user) {
          return res.status(400).send({ message: "Incorrect email or password" });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send({message: "Incorrect email or password"})
        }
        let token = jwt.sign({ id: user.id }, jwt_secret);
        Token.create({ token, UserId: user.id });
        res.send({message:"Successfully logged",user, token})
      },
      async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Hubo un problema al tratar de desconectarte' })
        }
    }

}

module.exports = UserController
