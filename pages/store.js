import InputField from "@/components/muiComps/InputFields/InputField";
import GeneralProducts from "@/components/subComponents/GeneralProducts";
import React from "react";

function Store() {
  return (
    <>
      <div className=" h-screen pt-13 flex justify-start gap-2">
        <div className="h-full w-[30%] md:block hidden md:min-w-[300px]  border-l border">
          <div className="pt-14 text-left text-color_5 text-[25px] font-rubik">
            Filters
          </div>
        </div>
        <div className="h-full w-full flex flex-col gap-4 pt-[55px] md:mx-0 mx-2 md:pt-16">
          <InputField
            fullWidth={true}
            size="large"
            label="Search show, product or design..."
          />
          <div className="h-full overflow-y-auto">
            <GeneralProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
