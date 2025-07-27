import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import App from "./App/App";
import About from "../Pages/About/About";
import NotFound from "./NotFound";

import PrivacyPolicy from '../Legality/PrivacyPolicy'
import TermsOfUse from '../Legality/TermsOfUse'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Notifications from "./Notifications/Notification";

function Layout() {
  const [isDark, setIsDark] = useState(true);

  const toggleDisplayMode = () => {
    setIsDark(!isDark);
  }

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const [showNotification, setShowNotification] = useState(false)

  const toggleShowNotification = () => {
    setShowNotification(!showNotification);
  }

  const mainDisplayLayout = () => {
    return (
      <div className={"flex flex-col justify-between w-full object-contain " + (isDark ? "dark-mode" : "light-mode")}>
        <BrowserRouter>
          <div className="sticky top-0 z-50 shadow h-1/12 object-contain">
            <Header isSidebar={showSidebar} toggleSidebar={toggleSidebar} toggleNotifications={toggleShowNotification} />
            <div className="absolute right-0" >
              {showNotification ? <Notifications /> : ''}
            </div>
            <div className="absolute right-0">
              {showSidebar ? <Sidebar isDark={isDark} toggleMode={toggleDisplayMode} /> : ''}
            </div>

          </div>

          <div className="flex flex-roww-full">
            <div className="flex flex-col justify-between object-contain h-full w-full z-0" >
              <Routes>
                <Route path="/Vastrum/" element={<App />}></Route>
                <Route path="/Vastrum/about" element={<About />}></Route>

                <Route path="/Vastrum/privacy-policy" element={<PrivacyPolicy />}></Route>
                <Route path="/Vastrum/terms-of-use" element={<TermsOfUse />}></Route>

                <Route path="/Vastrum/*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </div>

          <div className="">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }


  return (
    <div className="">
      {false ? <NotFound /> : mainDisplayLayout()}
    </div>
  );
}

export default Layout;
