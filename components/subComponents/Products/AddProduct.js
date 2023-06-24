import React, { useState } from "react";
import InputField from "@/components/muiComps/InputFields/InputField";

function AddProduct() {
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("tshirt");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [instock, setStock] = useState(true);
  const [design, setDesign] = useState("");
  return (
    <div className="md:flex justify-start gap-5">
      <div className="px-2 mt-3 w-[50%]">
        <div className="">
          <div className="text-color_5 font-workSans">Product Name:</div>
          <InputField
            fullWidth={true}
            size="small"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mt-2 ">
          <div className="text-color_5 font-workSans">Price (Rupees):</div>
          <InputField
            fullWidth={true}
            size="small"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="mt-2 ">
          <div className="text-color_5 font-workSans">Tags tag1 tag2 tag3:</div>
          <InputField
            fullWidth={true}
            size="small"
            type="text"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>
        <div className="mt-2 ">
          <label for="category" className="font-workSans">
            Category:
          </label>

          <select
            name="category"
            className="border p-3 outline:none rounded ml-5 font-rubik text-text_1"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="tshirt">T-Shirt</option>
            <option value="jacket">Jacket</option>
          </select>
        </div>
        <div className="mt-2 ">
          <div className="text-color_5 font-workSans">Sizes:</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {["small", "medium", "large", "x-large"].map((item, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      !sizes.includes(item)
                        ? setSizes([...sizes, item])
                        : setSizes(sizes.filter((e) => e != item));
                    }}
                    className={`
                    ${
                      sizes && sizes.includes(item)
                        ? "bg-color_11"
                        : "bg-text_2"
                    }
                     px-4 py-1 rounded-full cursor-pointer font-rubik text-color_2 `}
                    key={index}
                  >
                    {item}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="mt-2 ">
          <label for="category" className="font-workSans">
            Available in Stock:
          </label>

          <select
            name="category"
            className="border p-3 outline:none rounded ml-5 font-rubik text-text_1"
            id="category"
            value={instock}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className="">
          <div className="text-color_5 font-workSans">Description:</div>
          <InputField
            fullWidth={true}
            size="small"
            value={description}
            multiline={true}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className=" mt-2">
          <div className="text-color_5 font-workSans">Design ID:</div>
          <InputField
            fullWidth={true}
            size="small"
            value={design}
            // multiline={true}
            onChange={(e) => {
              setDesign(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grow px-2">
        <div className="mt-2 ">
          <div className="text-color_5 font-workSans">Colors:</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {["red", "white", "black", "green", "grey", "orange", "blue"].map(
              (item, index) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        !colors.includes(item)
                          ? setColors([...colors, item])
                          : setColors(colors.filter((e) => e != item));
                      }}
                      className={`  ${
                        colors && colors.includes(item)
                          ? "bg-color_11"
                          : "bg-text_2"
                      } px-4 py-1 rounded-full cursor-pointer font-rubik text-color_2 `}
                      key={index}
                    >
                      {item}
                    </div>
                  </>
                );
              }
            )}
          </div>
        </div>
        <div className="mt-2 font-workSans text-color_5">Images:</div>
        {colors.map((item, index) => {
          return (
            <>
              <div key={index}>images for {item}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AddProduct;
