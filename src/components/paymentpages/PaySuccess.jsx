import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

function PaySuccess(props) {
  const transType = props.formHandler.getValues("paymentMethod");
  const payRef = useRef();
  // ref.current.innerHTML = `<div id="redirectTo3ds1AcsSimple" xmlns="http://www.w3.org/1999/html"> <iframe id="redirectTo3ds1Frame"  name="redirectTo3ds1Frame" height="100%" width="100%"> </iframe><form id="redirectTo3ds1Form" method="POST" action="https://authentication.cardinalcommerce.com/ThreeDSecure/V2_1_0/CReq" target="redirectTo3ds1Frame"> <input type="hidden" name="creq" value="eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImMzMDQ3YzNlLTM0ZTMtNGYwNy1iNDk2LTc4YjM2Mzk4NjFjZCIsImFjc1RyYW5zSUQiOiJlOWYxOTllZC0zMzkwLTQ4NGUtYWViYy1mYzQwY2Y2N2E0NzYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDUiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0" />  <input type="hidden" /> </form><script id="authenticate-payer-script"> var e=document.getElementById("redirectTo3ds1Form");if (e) { e.submit(); if (e.parentNode !== null) { e.parentNode.removeChild(e); } } </script></div>`;
  // ref.current.innerHTML = props.formHandler.getValues();

  // console.log(ref.current);

  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    defaultValues: {
      // memeberType: props.formHandler.getValues("role"),
      role: props.formHandler.getValues("role"),

      startDate: "", //formatDate(formattedLastMonthDate),
      endDate: "", // formatDate(formattedCurrentDate),
      memberid: props.formHandler.getValues("memberId"),
      cardTypeId: "",
    },
  });
  const data = props.formHandler.getValues();
  console.log(data);

  useEffect(() => {
    const htmlCode = `
    <div id="redirectTo3ds1AcsSimple" xmlns="http://www.w3.org/1999/html"> <iframe id="redirectTo3ds1Frame"  name="redirectTo3ds1Frame" height="100%" width="100%"> </iframe><form id="redirectTo3ds1Form" method="POST" action="https://authentication.cardinalcommerce.com/ThreeDSecure/V2_1_0/CReq" target="redirectTo3ds1Frame"> <input type="hidden" name="creq" value="eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjA3OGQ4YzQ1LTk0MGMtNGEzZi1hNDI4LTk3MDllYzk0YzFiYyIsImFjc1RyYW5zSUQiOiJlMGNiMTYyMC1kNmFiLTQyYzMtYTRiZi05MDI4NTY0ZmM5NzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDUiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0" />  <input type="hidden" /> </form><script id="authenticate-payer-script"> var e=document.getElementById("redirectTo3ds1Form");if (e) { e.submit(); if (e.parentNode !== null) { e.parentNode.removeChild(e); } } </script></div>
    `;

    const test = `<div id="redirectTo3ds1AcsSimple" xmlns="http://www.w3.org/1999/html"> <iframe id="redirectTo3ds1Frame"  name="redirectTo3ds1Frame" height="100%" width="100%"> </iframe><form id="redirectTo3ds1Form" method="POST" action="https://authentication.cardinalcommerce.com/ThreeDSecure/V2_1_0/CReq" target="redirectTo3ds1Frame"> <input type="hidden" name="creq" value="eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjA3OGQ4YzQ1LTk0MGMtNGEzZi1hNDI4LTk3MDllYzk0YzFiYyIsImFjc1RyYW5zSUQiOiJlMGNiMTYyMC1kNmFiLTQyYzMtYTRiZi05MDI4NTY0ZmM5NzQiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDUiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0" />  <input type="hidden" /> </form><script id="authenticate-payer-script"> var e=document.getElementById("redirectTo3ds1Form");if (e) { e.submit(); if (e.parentNode !== null) { e.parentNode.removeChild(e); } } </script></div>`;

    if (payRef.current) {
      payRef.current.innerHTML = test;
    }
  }, []);

  return (
    <div>
      <h1 className="text-center text-success">Payment Initiated</h1>
      <div className="d-flex justify-content-center">
        <FaCheckCircle
          style={{ fontSize: "100px" }}
          className="text-success my-4"
        />
      </div>

      {/* <iframe src="" frameborder="0">
   {   `<div id="redirectTo3ds1AcsSimple" xmlns="http://www.w3.org/1999/html"> <iframe id="redirectTo3ds1Frame"  name="redirectTo3ds1Frame" height="100%" width="100%"> </iframe><form id="redirectTo3ds1Form" method="POST" action="https://authentication.cardinalcommerce.com/ThreeDSecure/V2_1_0/CReq" target="redirectTo3ds1Frame"> <input type="hidden" name="creq" value="eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImMzMDQ3YzNlLTM0ZTMtNGYwNy1iNDk2LTc4YjM2Mzk4NjFjZCIsImFjc1RyYW5zSUQiOiJlOWYxOTllZC0zMzkwLTQ4NGUtYWViYy1mYzQwY2Y2N2E0NzYiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDUiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMi4wIn0" />  <input type="hidden" /> </form>
      <script id="authenticate-payer-script"> 
      var e=document.getElementById("redirectTo3ds1Form");
      if (e) { 
         e.submit() 
      } 
      </script>
      </div>`}
      </iframe> */}

      <h5 className="text-center my-4">
        {transType === "Debit card" ? (
          <div ref={payRef}></div>
        ) : (
          "You will receive a prompt from your mobile operator to confirm."
        )}
      </h5>
      <div className="d-flex justify-content-end my-2">
        <button onClick={() => props.handleNext(1)} className="btn btn-success">
          View transactions
        </button>
      </div>
    </div>
  );
}

export default PaySuccess;
