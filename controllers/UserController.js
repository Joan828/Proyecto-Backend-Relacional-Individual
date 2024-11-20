const {User} = require("../models/index")

const UserController = {
    async create(req, res){
        try{
            const user = await User.create(req.body)
            res.status(201).send({message:"User created successfully",user})
        }catch(err){
            console.log(err);
            res.status(500).send({message:"There was a problem", err})
        }
    },
    async getAll(req, res) {
        try {
          const users = await User.findAll();
          res.status(200).send({message: "Búsqueda realizada con éxito", users});
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
        // const isMatch = await bcrypt.compare("quieromuchoamitia","$10$wzRkyjrV30ay3tgFr.k/6OJ8VhZdBhKTf9t/tIfU0MYhktoTzgK6G")
        if (!isMatch) {
            return res.status(400).send({message: "Incorrect email or password"})
        }
        res.send({message:"Successfully logged",user})
      },
}

module.exports = UserController