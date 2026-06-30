"use client";
import { CategoryType, foodType } from "@/types/common";
import axios from "axios";
import { useState, useEffect, use } from "react";
import { FoodsCard } from "./FoodsCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { uploadFile } from "@/lib/uploadFile";

export const MenuFoods = (categoryId: string) => {
  const [foods, setFoods] = useState<foodType[]>([]);
  const [newFoods, setNewFoods] = useState<foodType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foodName, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [file, setFile] = useState<File>();

  const getCategories = async () => {
    const response = await axios.get("http://localhost:3001/category");
    console.log("getfoots res", response);
    setCategories(response.data.foodCategories);
  };
  const getFoods = async () => {
    const response = await axios.get("http://localhost:3001/food");
    setFoods(response.data.foods);
  };

  const createFood = async () => {
    if (!file) {
      console.log("zurgaa oruul");
      return;
    }
    const imageUrl = await uploadFile(file);
    await axios.post("http://localhost:3001/food", {
      foodName: foodName,
      price: price,
      ingredients: ingredients,
      category: categoryId,
    });
    await getFoods();
  };

  const handleFoodName = (e: any) => {
    const { value } = e.target;
    setFoodname(value);
  };
  const handlePrice = (e: any) => {
    const { value } = e.target;
    setPrice(value);
  };
  const handleIngredients = (e: any) => {
    const { value } = e.target;
    setIngredients(value);
  };
  const handleFile = (e: any) => {
    const uploadedFile = e.target.files;
    setFile(uploadedFile);
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
            <div className="flex gap-4">
              <Dialog key={category._id}>
                <DialogTrigger asChild>
                  <div className="w-[270px] h-[240px] border border-red-500 border-dashed rounded-2xl p-2 flex flex-col justify-center items-center">
                    <button className="bg-red-700 border rounded-[100px] p-3">
                      <Plus className="text-white w-3 h-3" />
                    </button>
                    <p className="text-center">
                      Add new dishes to <br />
                      {category.categoryName}
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm flex flex-col gap-5">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                      Add new Dish to {category.categoryName}
                    </DialogTitle>
                    <div className="flex justify-between">
                      <div>
                        <label className="font-medium">Food Name</label>
                        <input
                          onChange={handleFoodName}
                          type="input"
                          className="border rounded-sm h-[22]"
                        />
                      </div>
                      <div>
                        <label className="font-medium">Food Price</label>
                        <input
                          onChange={handlePrice}
                          type="input"
                          className="border rounded-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <label className="font-medium">Ingredients</label>
                        <input
                          onChange={handleIngredients}
                          type="input"
                          className="border rounded-sm w-full h-22"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <label className="font-medium">Food image</label>
                        <div className="w-full border border-dashed bg-blue-200 h-24 flex justify-center items-center">
                          <input
                            onChange={handleFile}
                            type="file"
                            className="border-dashed rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </DialogHeader>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit" onClick={createFood}>
                        Add dish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <FoodsCard />
            </div>
          </div>
        );
      })}
    </div>
  );
};
