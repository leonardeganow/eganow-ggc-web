import React from "react";

function SelectAmount() {
  return (
    <div>
      {" "}
      <h1>Make payment</h1>
      <div className="py-4">
        <div className="row g-3">
          <div className="col-md-3 col-6">
            <button className="btn w-100 fw-bold btn-outline-success btn-md">
              10 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              20 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              50 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              100 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              150 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              200 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              250 GH
            </button>
          </div>
          <div className="col-md-3 col-6">
            <button className="btn w-100 btn-outline-success btn-md">
              300 GH
            </button>
          </div>
        </div>

        {/* FORM FIELD */}
        <form className="row my-4 g-2">
          <div className="col-md-9">
            <div>
              <input
                className="form-control p-2"
                type="input"
                placeholder="Enter an amount"
              />
            </div>
          </div>
          <div className="col-md-3">
            <button className="btn p-2 w-100 btn-success btn-md fw-bold">
              DONATE NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectAmount;
