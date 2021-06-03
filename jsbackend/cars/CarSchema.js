import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default new Schema({
  make: { type: String, enum: ["Ford", "Honda", "Skoda", "Volvo"] },
  model: { type: String }
});
