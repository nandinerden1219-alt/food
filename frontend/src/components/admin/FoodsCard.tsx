export const FoodsCard = () => {
  return (
    <div className="w-[270px] h-[240px] border border-gray-500 rounded-2xl p-2">
      <div className="h-[100px] w-full bg-blue-500"></div>
      <div className="flex  justify-between">
        <h1>foodname</h1>
        <p>price</p>
      </div>

      <p>ingredients</p>
    </div>
  );
};
