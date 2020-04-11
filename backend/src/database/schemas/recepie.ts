import mongoose from "mongoose"

const recepieScheme = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  cookingSteps: {
    required: true,
    type: Array
  },
  timeOfCooking: {
    required: true,
    type: String
  },
  createDate: {
    required: true,
    type: Date,
    default: Date.now
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
  tags: {
    required: true,
    type: Array
  }, 
  description: {
    required: true,
    type: String
  }
})

export interface IRecepie extends mongoose.Document {
  name: string,
  cookingSteps: Array<string>,
  timeOfCooking: string,
  createDate: Date,
  smallSlide: {
    imageUrl: string,
    label: string
  },
  bigSlide: {
    imageUrl: string,
    label: string
  },
  tags: Array<string>,
  description: string
}

const Recepie = mongoose.model<IRecepie>("Recepie", recepieScheme);
export default Recepie;

