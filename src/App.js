import AddProject from "./scenes/add project/AddProject.jsx";
import SidebarMenu from "./scenes/global/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="app">
      <SidebarMenu />
      <main className="content">
        <Routes>
          <Route path="/" element={<AddProject />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
