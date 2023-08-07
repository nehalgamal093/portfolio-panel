import AddProject from "./scenes/add project/AddProject.jsx";
import SidebarMenu from "./scenes/global/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import ProjectTables from "./scenes/project table/ProjectTable.jsx";
import AddProfile from "./scenes/add profile/AddProfile.jsx";
import Card from "./scenes/Card/Card.jsx";
import AddCertificate from "./scenes/add certificate/AddCertificate.jsx";

function App() {
  return (
    <div className="app">
      <SidebarMenu />
      <main className="content">
        <Routes>
          <Route path="/" element={<AddProject />} />
          <Route path="/projecttable" element={<ProjectTables />} />
          <Route path="/addprofile" element={<AddProfile />} />
          <Route path="/card" element={<Card />} />
          <Route path="/addcertificate" element={<AddCertificate />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
