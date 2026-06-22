import { connectDb } from "../util/connectDb.js";
import { FoodCategoryModel } from "../Model/food-category.model.js";
import { Context } from "hono";
export const createFoodCategory = async (c: Context) => {
  await connectDb();
  const input = await c.req.json();
  await FoodCategoryModel.create({
    categoryName: input.categoryName,
  });
  return c.json({
    message: "successfully created food category",
  });
};
export const getFoodCategories = async (c: Context) => {
  await connectDb();
  const foodCategories = await FoodCategoryModel.find();
  return c.json({
    message: "categorygoo av",
    foodCategories,
  });
};
export const putFoodCategories = async (c: Context) => {
  await connectDb();
  await connectDb();
  const id = c.req.param();
  const input = await c.req.json();
  const response = await FoodCategoryModel.findByIdAndUpdate(id, {
    categoryName: input.categoryName,
  });
  return c.json({
    message: "succesfully updated",
    response,
  });
};
export const delFoodCategories = async (c: Context) => {
  await connectDb();
  const id = c.req.param();

  const response = await FoodCategoryModel.findByIdAndUpdate(id);
  return c.json({
    message: "succesfully deleted",
    response,
  });
};
