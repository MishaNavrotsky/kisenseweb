import request from "../request"
import Recepie from "../../../database/schemas/recepie"

class recepies extends request {
  constructor() {
    super();
    this.get = {
      auth: false,
      path: "/recepies",
      function: async (req, res) => {
        const tags = (req.query.tags || '').split(',')
        console.log(tags)
        res.send({ ok: true, data: await Recepie.find().limit(8).lean() })
      }
    };
  }
}

export default new recepies();