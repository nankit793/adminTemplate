import InputField from "@/components/muiComps/InputFields/InputField";
import React, { useState } from "react";
function Products() {
  return (
    <>
      <div className="px-3 pt-2 w-[500px]">
        <InputField fullWidth={true} label="Search by name, tags, show.." />
      </div>
      <div className="px-3 ">
        <table className="text-left  [&>*]:[&>*]:p-1   [&>*]:[&>*]:py-3 [&>*:nth-child(even)]:bg-color_7">
          <tr className="[&>*]:text-color_5 [&>*]:px-2">
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Colors</th>
            <th>Sizes</th>
            <th>Edit</th>
          </tr>
          {[...Array(100).keys()].map((item, index) => {
            return (
              <tr className=" [&>*]:px-2" key={index}>
                <td>image</td>
                <td className="w-[30%]">
                  Cotton Tshirt naruto printCotton Tshirt naruto printCotton
                  Tshirt naruto print
                </td>
                <td>449Rs</td>
                <td>Yes</td>
                <td>T-Shirt</td>
                <td>R, G, B</td>
                <td>M, L, XL</td>
                <td>Edit</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Products;
