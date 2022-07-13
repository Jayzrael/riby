import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
// import Products from "./pages/Product";
// import Business from "./pages/Business";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ConsentPage from "./pages/Consent";
import "antd/dist/antd.css";
import Cooperative from "./pages/Business/CooperativeManagement";
import FinancialInclusion from "./pages/Business/Financial Inclusion";
import CobankingApp from "./pages/Product/CobankingApp";
import AgentBusiness from "./pages/Business/AgentBusiness";
import Career from "./pages/Career";
import Terms from "./pages/Terms/Terms";
import JobPosting from "./pages/JobPosting/JobPosting";
import ApplicationForm from "./pages/JobPosting/ApplicationForm/ApplicationForm";
import ScrollToTop from "./component/ScrollToTop";
import AgentBankApp from "./pages/Product/AgentBank";
import Privacy from "./pages/Privacy/Privacy";
import Cobank from "./pages/Product/CoBank";
import ErrorPage from "./pages/Errorpage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/business" element={<Business />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ConsentPage" element={<ConsentPage />} />
        <Route path="/business/Cooperative" element={<Cooperative />} />
        <Route path="/business/AgentBusiness" element={<AgentBusiness />} />
        <Route path="/business/FinancialInclusion" element={<FinancialInclusion />} />
        <Route path="/product/CobankingApp" element={<CobankingApp />} />
        <Route path="/product/agentbank" element={<AgentBankApp />} />
        <Route path="/product/coagent" element={<Cobank />} />

        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/JobPosting" element={<JobPosting />} />
        <Route path="/ApplicationForm" element={<ApplicationForm />} />

        <Route path="/Career" element={<Career />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;