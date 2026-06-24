import { Schema, model } from "mongoose";
const FoodSchema = new Schema({
  foodname: String,
  price: Number,
  ingredients: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "foodCategory",
  },
});
export const FoodModel = model("food", FoodSchema);
