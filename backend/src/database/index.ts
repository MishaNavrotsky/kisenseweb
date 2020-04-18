import config from "../config"
import mongoose from "mongoose"
import User, { IUser } from "./schemas/user"
import Application, { IApplication } from "./schemas/application"
import Recepie, { IRecepie } from "./schemas/recepie"
import Game, { IGame } from "./schemas/game"


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
      await Application.init();
      await Recepie.init();
      await Game.init();

      const game = {
        "bigSlide": {
          "imageUrl": "https://i.picsum.photos/id/53/800/480.jpg",
          "label": "21"
        },
        "smallSlide": {
          "imageUrl": "https://i.picsum.photos/id/59/800/480.jpg",
          "label": "1"
        },
        "data": {
          "name": "game 1",
          "text": "super game 1"
        },
        downloadUrl: "gerger",
        playUrl: "test"
      }
      Game.insertMany([game]);
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