import request from "../request"
import Game from "../../../database/schemas/game"

class games extends request {
  constructor() {
    super();
    this.get = {
      auth: false,
      path: "/games",
      function: async (req, res) => {
        res.send({ ok: true, data: await Game.find().lean() })
      }
    };
  }
}

export default new games();