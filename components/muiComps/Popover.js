import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

export default function BasicPopover(props) {
  return (
    <div className="text-right ">
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="">
            <div>{props.button}</div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 border  drop-shadow">
            <div>{props.content}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
