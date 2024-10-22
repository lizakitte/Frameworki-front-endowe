import NavBarMenu from "../components/NavBarMenu";
import Footer from "../components/Footer";
import Home from "../pages/Home"
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
import NotFound from "../pages/NotFound";

export const menuItems = [
    {   id: 1,
        label: "Home", 
        url: "/home",
        urlPattern: "/home",
        element: <Home></Home>,},
    {   id: 2, 
        label: "Laboratorium 1",
        url: "/lab1",
        urlPattern: "/lab1",
        element: <Lab1></Lab1>,}, 
    {   id: 3, 
        label: "Laboratorium 2",
        url: "/lab2/1",
        urlPattern: "/lab2/:id",
        element: <Lab2></Lab2>,}
];

function RootLayout({children}) {
    return ( 
      <> 
        <NavBarMenu items = {menuItems}></NavBarMenu>
        {children}
        <Footer></Footer>
      </>
      );
}

export default RootLayout;