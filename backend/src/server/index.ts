import express from 'express'
import requests from './requests'
import wsrequests from './wsrequests'
import cors from "cors"

import _ from "lodash"

class server {
    db = null;
    auth = null;
    app = null;
    requests = null;
    wsrequests = null;
    constructor(db = {}, auth = {}) {
        this.db = db;
        this.auth = auth;
        this.app = express();
        this.app
            .use(cors({
                origin: (origin, cb) => {
                    return cb(null, true);
                },
                credentials: true
            }));
        this.requests = new requests({
            db: this.db,
            auth: this.auth,
            express: this.app
        });
        this.wsrequests = new wsrequests({
            db: this.db
        });
    }



    init(port) {
        console.log("Server init!............");
        //init ws routes
        console.log("WS init...........");
        this.wsrequests.init(this.app, "/websocket");

        //init express routes
        console.log("Requests init.........");
        this.requests.init();

        this.app.use(this.auth.errorHandler);
        this.app.listen(port);
    }
}

export default server;