import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomePage/HomePage";
import AgentLoginPage from "../AgentLogin/AgentLoginPage";
import AgentDashboard from "../AgentDashboard/AgentDashboard";
import RegisterUser from "../AgentDashboard/RegisterUser";
import AgentCommission from "../AgentDashboard/AgentCommission";
import AgentRegisteredUsers from "../AgentDashboard/AgentRegisteredUsers";
import AgentChangePin from "../AgentDashboard/AgentChangePin";
import About from "../../components/about/About";
import Terms from "../../components/terms/Terms";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/agentlogin" element={<AgentLoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/agentdashboard" element={<AgentDashboard />}>
            <Route index element={<RegisterUser />} />
            <Route path="transactions" element={<AgentCommission />} />
            <Route path="registeredusers" element={<AgentRegisteredUsers />} />
            <Route path="changepin" element={<AgentChangePin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
