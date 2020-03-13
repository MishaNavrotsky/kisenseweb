import config from "../config"
import expressJwt from "express-jwt"
import jwt from "jsonwebtoken"
import User, { IUser } from "../database/schemas/user"
import crypto from "crypto"
import { rejects } from "assert"

class authetication {
  static secret = config.secret;
  static appModule = expressJwt({
    secret: config.secret,
    getToken: (req) => {
      return authetication.tokenFromCookies(req.headers.cookie);
    },

  });

  private static tokenFromCookies(cookies: string) {
    cookies = cookies || "";
    const array = cookies.split(";");
    for (let i of array) {
      if (i.replace(/ /g, "").startsWith("token=")) {
        return i.substring(i.indexOf("=") + 1);
      }
    }
    return null;
  }

  static errorHandler(err, req, res, next) {
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

  static userToIUserHandler(req, res, next) {
    req.tokenUser = req.user;
    req.user = new User(req.user);
    req.user._id = req.tokenUser.id
    next();
  }

  static generateToken({ name, id, role }) {
    const token = jwt.sign({
      name, id, role
    }, config.secret, {
      expiresIn: "2d"
    });
    return token;
  }

  static verifyToken(token): IUser {
    if (!token) return;
    const user = new User(jwt.verify(token, config.secret));
    return user;
  }

  static async cryptPassword(password: string): Promise<string> {
    const cipher = crypto.createCipheriv('aes-256-gcm', config.passwordKey, config.passwordICV);
    return cipher.update(password, 'utf8', 'hex') + cipher.final('hex');
  }
}

export default authetication;