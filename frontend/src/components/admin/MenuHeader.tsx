"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
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
import type { CategoryType } from "@/types/common";
import { Skeleton } from "@/components/ui/skeleton";
export const MenuHeader = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const getCategories = async () => {
    const response = await axios.get("http://localhost:3001/category");
    console.log("irj bga hariu", response);
    setCategories(response.data.foodCategories);
    setLoading(false);
  };
  const createCategories = async () => {
    const response = await axios.post("http://localhost:3001/category", {
      categoryName: newCategory,
    });
    await getCategories();
  };

  const handleCategoryName = (e: any) => {
    setNewCategory(e.target.value);
    console.log(newCategory);
  };

  useEffect(() => {
    getCategories();
  }, []);
  if (loading) {
    return (
      <div className="flex gap-4">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-24 h-10" />
      </div>
    );
  }
  return (
    <div className="bg-white w-full h-auto border rounded p-5 flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Dishes category</h1>
      <div className="flex gap-3 flex-wrap">
        <div className="border rounded-2xl px-4 py-2 text-sm font-medium">
          <span>All dishes </span>
        </div>
        {categories.map((category) => {
          return (
            <div
              className="border rounded-2xl px-4 py-2 text-sm font-medium"
              key={category._id}
            >
              {category.categoryName}
            </div>
          );
        })}

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <button className="bg-red-700 border rounded-[100px] p-3">
                <Plus className="text-white w-3 h-3" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm flex flex-col justify-between gap-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  Add new category
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <DialogDescription className="text-sm font-medium text-black">
                  Category name
                </DialogDescription>
                <input
                  onChange={handleCategoryName}
                  placeholder="Type category name..."
                  className="px-4 py-2 border border-1 rounded rounded-sm w-full"
                ></input>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit" onClick={createCategories}>
                    Add category
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};
