import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App({items}) {
  return (
    <div className="App">
      <RootLayout>
        <Routes>
          {items.map((item) => <Route path={item.urlPattern} element={item.element}></Route>)}
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;
