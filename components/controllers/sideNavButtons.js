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
    name: "Premium",
    id: 1,
    pageData: "premium",
  },
  {
    name: "More tabs",
    id: 2,
    pageData: "More tabs",
  },
  {
    name: "Payments",
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
