import React from "react";
import logo from "../../images/instragram/ndclogo-removebg-preview.png";
import Header from "../../components/Navbar/Navbar";
const AgentLoginPage = () => {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#006436" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form action="" className="bg-white p-5 rounded">
        <div className="d-flex justify-content-center mb-1">
          <img style={{ width: "60px" }} src={logo} alt="" />
        </div>
        <h3 className="text-center mb-4">Agent Login</h3>
        <div>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Agent Id"
          />
        </div>
        <div>
          <input
            className="form-control form-control-lg my-4"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default AgentLoginPage;
