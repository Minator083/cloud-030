import "./App.css";
import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      urlPattern: "/",
      element: <Home></Home>,
    },
    {
      id: 2,
      label: "Strona 1",
      url: "/page1",
      urlPattern: "/page1",
      element: <Page1></Page1>,
    },
    {
      id: 3,
      label: "Strona 2",
      url: "/page2",
      urlPattern: "/page2",
      element: <Page2></Page2>,
    },
  ];

  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route> */}
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern}
              element={item.element}
            ></Route>
          ))}
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>

        {/* <SimpleLayout>
              <p>content</p>
          </SimpleLayout> */}
      </RootLayout>
    </>
  );
}

export default App;
