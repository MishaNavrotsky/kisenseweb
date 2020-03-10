import expressWebSocket from 'express-ws'
import _ from "lodash"


class WSConnection extends Object {
  user = null;
  ws = null;
  constructor(user, ws) {
    super();
    this.user = user;
    this.ws = ws;
  }
}
class wsrequests extends Array {
  usersConnected = null;
  constructor(obj) {
    super();
    this.usersConnected = [];
  }

  init(express, defaultString) {
    const expressWS = expressWebSocket(express);
    const wss = expressWS.getWss();

    express.ws(defaultString, (ws, req) => {
      this.usersConnected.push({
        user: req.user,
        ws
      });
      ws.on("close", () => {
        _.remove(this.usersConnected, value => value.user.name === req.user.name);
      })
      ws.on("message", (message) => {
        let obj = { path: null };
        try {
          obj = JSON.parse(message);
        } catch (e) {

        }
        for (const webrequest of this) {
          if (obj.path === webrequest.path) {
            webrequest.message.function(obj, ws, req, this.usersConnected);
            break;
          }
        }
      })
    })
  }
}

export default wsrequests;