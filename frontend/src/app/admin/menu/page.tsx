import { Sidebar } from "@/components/admin/Sidebar";
import { MenuHeader } from "@/components/admin/MenuHeader";
import { MenuFoods } from "@/components/admin/MenuFoods";

const Page = () => {
  return (
    <div className="flex gap-5 pr-10">
      <Sidebar />
      <div className="flex flex-col gap-5">
        <MenuHeader />
        <MenuFoods />
      </div>
    </div>
  );
};
export default Page;
