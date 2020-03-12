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
    if (user.constructor.modelName !== "User") {
      throw "createUser object is not type of User";
    }
    return user.save().catch(error => {
      console.log(error.message);
      throw error;
    });
  }

  getUsers() {
    return User.find();
  }

  checkUser(user) {
    return User.findOne({
      name: user.name,
      password: user.password
    });
  }
}

const db = new database();
export default db;