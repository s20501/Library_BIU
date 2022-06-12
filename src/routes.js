
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Books from "views/Books.js";
import Book from "views/Book.js";
import Users from "views/Users.js";
import User from "views/User.js"


const routes = [
  {
    path: "/books",
    name: "Books",
    icon: "ni ni-books text-orange",
    component: Books,
    layout: "/admin",
  },
  {
    path: "/book/:id",
    name: "Book",
    component: Book,
    layout: "/admin",
    hideNav: true
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-blue",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
    layout: "/admin",
    hideNav: true
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
