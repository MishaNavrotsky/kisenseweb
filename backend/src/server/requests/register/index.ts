import request from "../request"
import bodyParser from 'body-parser'
import User from "../../../database/schemas/user"
import auth from "../../../authentication"
import db from "../../../database"

class register extends request {
  constructor() {
    super();
    this.post = {
      auth: false,
      middleware: [bodyParser.json()],
      path: "/register",
      function: (req, res) => {
        const user = new User(req.body);
        db.saveUser(user).then(result => {
          const token = auth.generateToken({
            name: user.name,
            role: user.role || "user",
            id: user.id
          });
          res.cookie('token', token, { httpOnly: true }).send({
            status: "ok",
            user: {
              id: user.id,
              name: user.name,
              role: user.role || "user",
              token
            }
            // token: token
          }).end();
        }).catch(err => {
          let messages = [];
          for (const i in err.errors) {
            if (err.errors[i].name === "ValidatorError") {
              messages.push(err.errors[i].message);
            }
          }
          res.send({
            status: "error",
            message: "validation error",
            messages: messages
          }).end();
        })
      }
    }
  }
}
export default new register();