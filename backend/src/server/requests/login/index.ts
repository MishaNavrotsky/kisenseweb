import request from "../request"
import bodyParser from 'body-parser'
import User from "../../../database/schemas/user"
import db from "../../../database"
import auth from "../../../authentication"

class login extends request {
  constructor() {
    super();
    this.post = {
      auth: false,
      middleware: [bodyParser.json()],
      path: "/login",
      function: (req, res) => {
        const user = new User(req.body);
        db.checkUser(user).then(result => {
          const token = auth.generateToken({
            name: user.name,
            role: user.role || "user",
            id: user.id
          });
          if (result) {
            res.cookie('token', token, { httpOnly: true }).send({
              status: "ok",
              user: {
                id: user.id,
                name: user.name,
                role: user.role || "user",
                token
              }
            })
          } else {
            res.status(401).send({
              status: "error",
              message: "user not found"
            })
          }
          res.end();
        })
      }
    }
  }
}
export default new login();