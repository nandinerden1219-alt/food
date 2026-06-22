import { Hono } from "hono";
import foodCategoryRoute from "./routes/food-category.route.js";

const app = new Hono();

app.route("/category", foodCategoryRoute);

export default app;
