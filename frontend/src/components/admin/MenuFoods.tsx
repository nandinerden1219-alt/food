"use client";
import { CategoryType, foodType } from "@/types/common";
import axios from "axios";
import { useState, useEffect } from "react";
import { FoodsCard } from "./FoodsCard";
import { Plus } from "lucide-react";
export const MenuFoods = () => {
  const [foods, setFoods] = useState<foodType[]>([]);
  const [newFoods, setNewFoods] = useState([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const getCategories = async () => {
    const response = await axios.get("http://localhost:3001/category");
    console.log("getfoots res", response);
    setCategories(response.data.foodCategories);
  };
  const getFoods = async () => {
    const response = await axios.get("http://localhost:3001/food");
    setFoods(response.data.foods);
  };
  useEffect(() => {
    getFoods();
    getCategories();
  }, []);
  return (
    <div className="flex flex-col gap-10">
      {categories.map((category) => {
        return (
          <div key={category._id} className="bg-white border rounded-xl p-5">
            <p>{category.categoryName}</p>
            <div className="flex gap-5">
              <div className="w-[270px] h-[240px] border border-red-500 border-dashed rounded-2xl p-2 flex flex-col justify-center items-center">
                <button className="bg-red-700 border rounded-[100px] p-3">
                  <Plus className="text-white w-3 h-3" />
                </button>
                <p className="text-center">
                  Add new dishes to <br />
                  {category.categoryName}
                </p>
              </div>

              <FoodsCard />
            </div>
          </div>
        );
      })}
    </div>
  );
};
