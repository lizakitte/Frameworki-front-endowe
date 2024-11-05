import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import AppReducer from "./data/AppReducer";
import { data } from "./data/module-data"
import { useReducer } from "react";
import AppContext from "./data/AppContext";

function App({items}) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch}}>
      <div className="App">
      <RootLayout>
        <Routes>
          {items.map((item) => <Route path={item.urlPattern} element={item.element}></Route>)}
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </RootLayout>
    </div>
    </AppContext.Provider> 
  );
}

export default App;
