import InputField from "@/components/muiComps/InputFields/InputField";
import Read from "@/components/subComponents/Products/Read";
import React, { useState } from "react";
import AddProduct from "../Products/AddProduct";
import EditProduct from "../Products/EditProduct";
function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const tabOptions = [
    "Product List",
    "Add Product",
    "Update Product",
    "Delete Product",
  ];
  const getMainContent = (step) => {
    switch (step) {
      case 0:
        return <Read />;
      case 1:
        return <AddProduct />;
      case 2:
        return <EditProduct />;
      case 3:
        return "<Doshweklrflwekmflsdmflsd;lfla dosha={dosha} />";
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
    <>
      <div className=" flex-wrap flex justify-evenly  font-rubik text-text_2 ">
        {tabOptions?.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
            className={`${
              activeTab === index ? "text-color_2 bg-color_6" : "bg-transparent"
            } cursor-pointer  py-2 text-center grow duration-100  whitespace-nowrap`}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="">{getMainContent(activeTab)}</div>
    </>
  );
}

export default Products;
