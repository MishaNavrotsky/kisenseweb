import config from "../config"
import mongoose from "mongoose"
import User, { IUser } from "./schemas/user"
class database {
  connectionString: string = null;
  db: mongoose.Mongoose = null;
  constructor() {
    console.log("Database init!............");
    this.connectionString = config.dbConnectionString; //"mongodb://juju577:noV123ch@ds233198.mlab.com:33198/heroku_83f1b22l"
  }

  async init() {
    console.log("Connecting to DB on " + this.connectionString + ".....");
    try {
      this.db = await mongoose.connect(this.connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      // await this.db.connection.db.dropDatabase();
      await User.init();
    } catch (e) {
      throw "DB ERROR: " + e.message;
    }
    console.log("DB connected.");
  }

  saveUser(user) {
    return new User(user).save();
  }

  getUsers(limit, skip) {
    return User.find().limit(limit).skip(skip);
  }

  checkUser(user) {
    return User.findOne(user);
  }
}

const db = new database();
export default db;