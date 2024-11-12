import NavBarMenu from "../components/NavBarMenu";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
import Lab3 from "../pages/Lab3";
import Lab5 from "../pages/Lab5";
import Edit from "../pages/Edit";
import Add from "../pages/Add";
import User from "../components/User";
import Comments from "../components/Comments";

export const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home></Home> },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1></Lab1>,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2></Lab2>,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3></Lab3>,
  },
  {
    id: 6,
    label: "Laboratorium 4 add",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <Add></Add>,
    hidden: true,
  },
  {
    id: 7,
    label: "Laboratorium 4 edit",
    url: "/lab4/edit/1",
    urlPattern: "/lab4/edit/:id",
    element: <Edit></Edit>,
    hidden: true,
  },
  {
    id: 8,
    label: "Laboratorium 5",
    url: "/lab5",
    urlPattern: "/lab5",
    element: <Lab5></Lab5>,
  },
  {
    id: 9,
    label: "Laboratorium 5 user",
    url: "/lab5/users/1",
    urlPattern: "/lab5/users/:id",
    element: <User></User>,
    hidden: true,
  },
  {
    id: 10,
    label: "Laboratorium 5 comments",
    url: "/lab5/posts/1/comments",
    urlPattern: "/lab5/posts/:id/comments",
    element: <Comments></Comments>,
    hidden: true,
  },
];

function RootLayout({ children }) {
  return (
    <>
      <NavBarMenu items={menuItems.filter((item) => !item.hidden)}></NavBarMenu>
      {children}
      <Footer></Footer>
    </>
  );
}

export default RootLayout;
