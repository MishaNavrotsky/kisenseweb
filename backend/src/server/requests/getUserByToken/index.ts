import request from "../request"
class getUserByToken extends request {
  constructor() {
    super();
    this.get = {
      path: "/user",
      auth: true,
      function: (req, res) => {
        res.json(req.user)
      }
    };
  }
}

export default new getUserByToken();