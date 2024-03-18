import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Sidebar from "./Sidebar/Sidebar";
import App from "./App/App";
import About from "../Pages/About/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <div>      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Layout;
