import expressJwt from "express-jwt"
import jwt from "jsonwebtoken"

class authetication {
  secret = null;
  expressModule = null;

  init(secret) {
    this.secret = secret;
    this.expressModule = expressJwt({
      secret: secret,
      getToken: (req) => {
        return this.tokenFromCookies(req.headers.cookie);
      }
    });
  }

  private tokenFromCookies(cookies: string) {
    cookies = cookies || "";
    const array = cookies.split(";");
    for (let i of array) {
      if (i.replace(/ /g, "").startsWith("token=")) {
        return i.substring(i.indexOf("=") + 1);
      }
    }
    return null;
  }

  errorHandler(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(err.status).send({
        status: "error",
        message: err.message
      });
      res.end();
      return;
    } else {
      throw err;
    }
  }

  tokenToUserReqHandler = (req, res, next) => {
    req.user = this.verifyToken(this.tokenFromCookies(req.headers.cookie));
    next();
  }

  generateToken({ name, id, role }) {
    const token = jwt.sign({
      name, id, role
    }, this.secret, {
      expiresIn: "2d"
    });
    return token;
  }

  verifyToken(token) {
    if (!token) return;
    const user = jwt.verify(token, this.secret);
    return user;
  }
}

export default authetication;