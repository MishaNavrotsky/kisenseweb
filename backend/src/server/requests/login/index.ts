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
      function: async (req, res) => {
        const user = req.body
        user.password = await auth.cryptPassword(user.password);
        db.checkUser(user).then(result => {
          if (result) {
            const token = auth.generateToken({
              name: result.name,
              role: result.role,
              id: result.id
            });
            res.cookie('token', token, { httpOnly: true }).send({
              status: "ok",
              user: {
                id: result.id,
                name: result.name,
                role: result.role,
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