import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import App from "./App/App";
import About from "../Pages/About/About";
import NotFound from "./NotFound";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const [isDark, setIsDark] = useState(true);

  const toggleDisplayMode = () => {
    setIsDark(!isDark);
  }

  const [showSidebar, setShowSidebr] = useState(false)

  const toggleSidebar = () => {
    setShowSidebr(!showSidebar);
  }

  const mainDisplayLayout = () => {
    return (
      <div className={"flex flex-col justify-between w-screen object-contain " + (isDark ? "dark-mode" : "light-mode")}>
        <BrowserRouter>
          <div className="h-1/12">
            <Header isSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          </div>

          <div className="flex flex-roww-full">
            <div className="flex flex-col justify-between object-contain h-full w-full z-0" >
              <Routes>
                <Route path="/Vastrum/" element={<App />}></Route>
                <Route path="/Vastrum/about" element={<About />}></Route>

                <Route path="/Vastrum/*" element={<NotFound />}></Route>
              </Routes>
            </div>

            <div className="absolute right-0">
              {showSidebar ? <Sidebar isDark={isDark} toggleMode={toggleDisplayMode} /> : ''}
            </div>
          </div>

          <div className="">
            <Footer />
          </div>
          {
            isDark.toString()
          }
        </BrowserRouter>
      </div>
    )
  }


  return (
    <div className="min-w-screen min-h-screen">
      {false ? <NotFound /> : mainDisplayLayout()}
    </div>
  );
}

export default Layout;
