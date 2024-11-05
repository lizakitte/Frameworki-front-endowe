import NavBarMenu from "../components/NavBarMenu";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
import Lab3 from "../pages/Lab3";
import Lab4 from "../pages/Lab4";
import Edit from "../components/Edit";
import NotFound from "../pages/NotFound";
import Add from "../components/Add";

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
    id: 5,
    label: "Laboratorium 4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4></Lab4>,
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
