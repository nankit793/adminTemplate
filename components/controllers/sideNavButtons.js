import Products from "../subComponents/index/Products";
import Users from "../subComponents/index/Users";
import Dashboard from "../subComponents/slides/Dashboard";
export const links = [
  {
    name: "Dashboard",
    id: 0,
    pageData: <Dashboard />,
  },
  {
    name: "Users",
    id: 3,
    pageData: <Users />,
  },
  {
    name: "Products",
    id: 1,
    pageData: <Products />,
  },
  {
    name: "Desings",
    id: 2,
    pageData: <Products />,
  },
  {
    name: "Orders",
    id: 4,
    pageData: "",
  },
  {
    name: "Stocks",
    id: 5,
    pageData: "",
  },
  {
    name: "Stats",
    id: 6,
    pageData: "",
  },
];
