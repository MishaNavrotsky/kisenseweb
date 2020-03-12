import express from 'express'
import requests from './requests'
import auth from "../authentication"
import cors from "cors"
import { initRoutes } from "./requests/routes"

import _ from "lodash"


class server {
  app = express();
  requests: requests = null;
  constructor() {
    this.app = express();
    this.app
      .use(cors({
        origin: (origin, cb) => {
          return cb(null, true);
        },
        credentials: true
      }));
    this.requests = new requests(this.app);
    initRoutes(this.requests)
  }

  init(port) {
    this.app.use(auth.errorHandler);
    this.app.listen(port);
  }
}

export default server;