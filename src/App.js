import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Products from "./pages/Product";
import Business from "./pages/Business";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ConsentPage from "./pages/Consent";
import "antd/dist/antd.css";
import Cooperative from "./pages/Business/CooperativeManagement/Cooperative";
import FinancialInclusion from "./pages/Business/Financial Inclusion/FinancialInclusion";
import CobankingApp from "./pages/Product/CobankingApp/CobankingApp";
import AgentBusiness from "./pages/Business/AgentBusiness/AgentBusiness";
import Career from "./pages/Career/Career";
import ScrollToTop from "./component/ScrollToTop";




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ConsentPage" element={<ConsentPage />} />
        <Route path="/Cooperative" element={<Cooperative />} />
        <Route path="/AgentBusiness" element={<AgentBusiness />} />
        <Route path="/FinancialInclusion" element={<FinancialInclusion />} />
        <Route path="/CobankingApp" element={<CobankingApp />} />
        <Route path="/Career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;
