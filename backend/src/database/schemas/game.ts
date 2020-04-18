import mongoose from "mongoose"

const gameScheme = new mongoose.Schema({
  bigSlide: {
    imageUrl: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    }
  },
  smallSlide: {
    imageUrl: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    }
  },
  data: {
    name: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    }
  },
  downloadUrl: {
    required: true,
    type: String
  },
  playUrl: String,
  createDate: {
    type: Date,
    default: Date.now,
  }
})

export interface IGame extends mongoose.Document {
  bigSlide: {
    imageUrl: string,
    label: string
  },
  smallSlide: {
    imageUrl: string,
    label: string
  },
  data: {
    name: string,
    text: string
  }
  downloadUrl: string,
  playUrl: string,
  createDate: Date
}

const Game = mongoose.model<IGame>("Game", gameScheme);

export default Game;

