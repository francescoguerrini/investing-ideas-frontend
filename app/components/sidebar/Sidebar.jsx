"use client";
import SidebarCard from "./SidebarCard";
import ITEMS from "../../utils/todo";

const Sidebar = () => {
  const items = ITEMS;
  return (
    <div className="w-full flex flex-col justify-center gap-6">
      {items.map((item, index) => (
        <SidebarCard
          key={index}
          title={item.title}
          description={item.description}
          name={item.name}
          tickers={item.tickers}
        />
      ))}
    </div>
  );
};
export default Sidebar;
