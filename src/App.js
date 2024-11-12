import "./App.css";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./components/AppProvider";

function App({items}) {
  return (
    <AppProvider>
      <div className="App">
      <RootLayout>
        <Routes>
          {items.map((item) => <Route path={item.urlPattern} element={item.element}></Route>)}
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </RootLayout>
    </div>
    </AppProvider> 
  );
}

export default App;
