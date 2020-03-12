import request from "../request"
import db from "../../../database"

class users extends request {
  constructor() {
    super();
    this.get = {
      auth: true,
      path: "/users",
      function: async (req, res) => {
        const limit = Number(req.query.limit) || 10;
        const skip = Number(req.query.skip) || 0;
        res.json(await db.getUsers(limit, skip)).end();
      }
    };
  }
}

export default new users();