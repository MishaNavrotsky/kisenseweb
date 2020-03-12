import _ from "lodash"
import { RequestHandler } from "express"
import { PathParams } from "express-serve-static-core"

interface getRequest {
  auth: boolean,
  path: PathParams,
  middleware?: any,
  function: RequestHandler
}

interface postRequest {
  auth: boolean,
  path: PathParams,
  middleware?: any,
  function: RequestHandler
}

class request {
  get: getRequest = null;
  post: postRequest = null;
  get notAuthPathes() {
    const arr = [];
    if (this.get)
      if (!this.get.auth && this.get.path) {
        arr.push({ url: this.get.path, methods: ["GET"] });
      }

    if (this.post)
      if (!this.post.auth && this.post.path) {
        arr.push({ url: this.post.path, methods: ["POST"] });
      }

    return arr;
  }
  get pathes() {
    const arr = [];
    if (this.get.path) {
      arr.push(this.get.path);
    }

    if (this.post.path) {
      arr.push(this.post.path);
    }
    return arr;

  }

  init(requests: Array<any>) {
    requests.push(this);
  }

  toObject() {
    var obj = {
      get: this.get,
      post: this.post
    }
    return obj;
  }
}

export default request;