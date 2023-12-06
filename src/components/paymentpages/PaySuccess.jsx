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

  const paymentUrl = props.formHandler.getValues("paymentUrl");

  const redirectContainerRef = React.useRef();
  React.useEffect(() => {
    if (redirectContainerRef.current) {
      // Set the HTML content
      redirectContainerRef.current.innerHTML = paymentUrl;

      // Execute the script
      const scriptElement =
        redirectContainerRef.current.querySelector("script");
      if (scriptElement) {
        // Create a new script element to execute the script
        const newScript = document.createElement("script");
        newScript.innerHTML = scriptElement.innerHTML;
        document.body.appendChild(newScript);

      //  const iframeEl=  redirectContainerRef.current.querySelector("iframe");
      //  if(iframeEl){
      //    iframeEl.parentNode.style.height = "100%"
      //    console.log(iframeEl);
      //  }
        
      const divEl = redirectContainerRef.current.querySelector('#redirectTo3ds1AcsSimple')
      console.log(divEl)
      if(divEl){
        divEl.style.height = "100%"
      }



        // Remove the original script element to avoid duplication
        scriptElement.parentNode.removeChild(scriptElement);
      }
    }
  }, []);

  return (
    <div className="">
      <h1 className="text-center text-success">Payment Initiated</h1>
      {/* <div className="d-flex justify-content-center">
        <FaCheckCircle
          style={{ fontSize: "100px" }}
          className="text-success my-4"
        />
      </div> */}

      <h5 className="text-center my-4">
        {transType === "Debit card" ? (
          <div style={{height: '400px'}} ref={redirectContainerRef}></div>
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
