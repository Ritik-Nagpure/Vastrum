import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/Sidebar";
import App from "./App/App";
import About from "../Pages/About/About";
import NotFound from "./NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div className="flex flex-col justify-between min-h-screen w-screen object-contain ">
        <Header isDark={isDark} toggleMode={toggleDisplayMode} isSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="flex flex-row justify-center items-center w-full h-full bg-amber-300">

          <div className="flex flex-col justify-between object-contain bg-amber-600 h-full w-full" >
            <Router>
              <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/about" element={<About />}></Route>

                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </Router>
          </div>

          <div className="bg-green-400 h-full">
            {showSidebar ? <Sidebar /> : ''}
          </div>
        </div>
        <NotFound />
        <NotFound />
        <NotFound />
        <NotFound />
        <Footer />
      </div>
    )
  }


  return (
    <div className="min-h-100%">
      {false ? <NotFound /> : mainDisplayLayout()}
    </div>
  );
}

export default Layout;
