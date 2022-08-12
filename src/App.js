import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexOne from "./HomePage/IndexOne";
import AboutUs from "./Pages/About Us/AboutUs";
import InfraSetup from "./Pages/Services/InfraSetup";
import MarketSales from "./Pages/Services/MarketSales";
import CurriculumImp from "./Pages/Services/CurriculumImp";
import AdminSup from "./Pages/Services/AdminSup";
import TechSetup from "./Pages/Services/TechSetup";
import AffPerSupp from "./Pages/Services/AffPerSupp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexOne />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/InfraStructureSetup" element={<InfraSetup />} />
          <Route path="/MarketingSales" element={<MarketSales />} />
          <Route path="/CurriculumImplementation" element={<CurriculumImp />} />
          <Route path="/AdministrativeSupport" element={<AdminSup />} />
          <Route path="/TechnologySupport" element={<TechSetup />} />
          <Route
            path="/AffiliationPermissionSupport"
            element={<AffPerSupp />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
