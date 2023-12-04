import React from "react";
import AgentSidebar from "./AgentSidebar";
import { Outlet } from "react-router";
import AgentBottomNav from "./AgentBottomNav";
const AgentDashboard = () => {
  return (
    <main>
      <div className="">
        <div className="row">
          <div className="col-md-2 bg-danger p-0 m-0">
            <AgentSidebar />
          </div>
          <div className="col-md-10 m-0 p-0 ">
            <Outlet />
          </div>
         <AgentBottomNav/>
        </div>
      </div>
    </main>
  );
};

export default AgentDashboard;
