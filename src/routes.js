
import Profile from "views/examples/Profile.js";
import Books from "views/Books.js";
import Book from "views/Book.js";
import Users from "views/Users.js";
import User from "views/User.js"
import BookEdit from "views/BookEdit";


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
    path: "/bookEdit/:id",
    name: "BookEdit",
    component: BookEdit,
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
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  }
];
export default routes;
