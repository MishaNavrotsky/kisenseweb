import request from "../request"
import Application from "../../../database/schemas/application"

class applications extends request {
  constructor() {
    super();
    this.get = {
      auth: false,
      path: "/applications",
      function: async (req, res) => {
        res.send({ ok: true, data: await Application.find().lean() })
      }
    };
  }
}

export default new applications();