import { Hono } from "hono";
import {
  createFoodCategory,
  delFoodCategories,
  getFoodCategories,
  putFoodCategories,
} from "../controllers/food-category.controller.js";

const foodCategoryRoute = new Hono();
foodCategoryRoute.post("/", createFoodCategory);
foodCategoryRoute.get("/", getFoodCategories);
foodCategoryRoute.put("/", putFoodCategories);
foodCategoryRoute.delete("/", delFoodCategories);
export default foodCategoryRoute;
