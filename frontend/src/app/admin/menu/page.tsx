"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
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
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type CategoryType = {
  categoryName: string;
  _id: string;
};
const Page = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const getCategories = async () => {
    const response = await axios.get("http://localhost:3001/category");
    console.log("irj bga hariu", response);
    setCategories(response.data.foodCategories);
  };

  const createCategories = async () => {
    const response = await axios.post("http://localhost:3001/category"),
      {
        categoryName: newCategory,
      };
  };
  const handleChange = (e: any) => {
    setNewCategory(e.target.value);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="bg-white h-auto border rounded p-5 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Dishes category</h1>
      <div className="flex gap-5">
        <div className="border rounded-2xl px-4 py-1 text-sm flex gap-5">
          <span>All dishes gg</span>
        </div>
        {categories.map((category) => {
          return <div key={category._id}>{category.categoryName}</div>;
        })}

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  );
};
export default Page;
