import auth from "../../authentication"
import request from "./request"
import express from "express"
import _ from "lodash"
class requests extends Array {
  app: express.Application = null;
  constructor(app: express.Application) {
    super();
    this.app = app;
  }

  push(request: request): number {
    const disp = {
      ...request
    }

    console.log(`${request.constructor.name}: { ${disp.get ? "get: " + disp.get.path + " " : ""}${disp.post ? "post: " + disp.post.path : ""}, authGet:${disp.get?.auth}, authPost:${disp.post?.auth} }`);
    if (request.get) {
      const authMiddleware = request.get.auth ? auth.appModule : (err, req, res, next) => { next() };
      if (!_.isEmpty(request.get.middleware))
        this.app.get(request.get.path, request.get.middleware, authMiddleware, auth.userToIUserHandler, request.get.function);
      else
        this.app.get(request.get.path, authMiddleware, auth.userToIUserHandler, request.get.function);
    }
    if (request.post) {
      const authMiddleware = request.post.auth ? auth.appModule : (err, req, res, next) => { next() };
      if (!_.isEmpty(request.post.middleware))
        this.app.post(request.post.path, request.post.middleware, authMiddleware, auth.userToIUserHandler, request.post.function);
      else
        this.app.post(request.post.path, authMiddleware, auth.userToIUserHandler, request.post.function);
    }
    return super.push(request)
  }
}

export default requests;