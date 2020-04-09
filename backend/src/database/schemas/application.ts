import mongoose from "mongoose"

const applicationScheme = new mongoose.Schema({
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
  createDate: {
    type: Date,
    default: Date.now,
  }
})

export interface IApplication extends mongoose.Document {
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
  createDate: Date
}

const Application = mongoose.model<IApplication>("Application", applicationScheme);

export default Application;

