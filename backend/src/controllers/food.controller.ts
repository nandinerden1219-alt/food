import { connectDb } from "../util/connectDb.js";
import { FoodModel } from "../Model/food.model.js";
import { Context } from "hono";
export const createFood = async (c: Context) => {
  await connectDb();
  const input = await c.req.json();
  await FoodModel.create({
    foodname: input.categoryName,
  });
  return c.json({
    message: "successfully created food category",
  });
};
export const getFood = async (c: Context) => {
  await connectDb();
  const food = await FoodModel.find();
  return c.json({
    message: "hooloo av",
    food,
  });
};
export const putFood = async (c: Context) => {
  await connectDb();
  await connectDb();
  const id = c.req.param();
  const input = await c.req.json();
  const response = await FoodModel.findByIdAndUpdate(id, {
    foodname: input.foodname,
    price: input.foodprice,
    ingredients: input.foodingredients,
    category: input.category,
  });
  return c.json({
    message: "succesfully updated",
    response,
  });
};
export const delFood = async (c: Context) => {
  await connectDb();
  const id = c.req.param();

  const response = await FoodModel.findByIdAndUpdate(id);
  return c.json({
    message: "succesfully deleted",
    response,
  });
};
