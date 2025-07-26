import Header from "./Header/Header";
import Footer from "./Footer/footer";
// import Sidebar from "./Sidebar/Sidebar";
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

  const mainDisplayLayout = () => {
    return (
      <div className="flex flex-col justify-between w-screen object-contain">
        <Header isDark={isDark} toggleMode={toggleDisplayMode} />
        <div className="flex flex-col justify-between object-contain" >
          <Router>
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="/about" element={<About />}></Route>

              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </Router>
          {/* <Sidebar /> */}
        </div >
        <Footer />
      </div>
    )
  }
  return (
    <div className="h-screen">
      {false ? <NotFound /> : mainDisplayLayout()}
    </div>
  );
}

export default Layout;
