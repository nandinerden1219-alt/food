import { Hono } from "hono";
import {
  createFood,
  delFood,
  getFood,
  putFood,
} from "../controllers/food.controller.js";

const foodRoute = new Hono();
foodRoute.post("/", createFood);
foodRoute.get("/", getFood);
foodRoute.put("/", putFood);
foodRoute.delete("/", delFood);
export default foodRoute;
