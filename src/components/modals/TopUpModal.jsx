import * as React from "react";
import Modal from "@mui/material/Modal";
// import GgcRegForm from "../forms/GgcRegForm";
// import PhoneNumberForm from "../forms/PhoneNumberForm";
import ChoosePayMethod from "../forms/ChoosePayMethod";
import SelectAmount from "../forms/SelectAmount";
import PaySuccess from "../paymentpages/PaySuccess";
import { useForm } from "react-hook-form";
import ReviewPaymentPage from "../paymentpages/ReviewPaymentPage";
import useStore from "../../formstore/formStore";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TransactionsTwo from "../forms/TransactionsTwo";

const style = {
  position: "relative",
  top: "54%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // Use viewport width
  maxWidth: "600px", // Set a maximum width if needed
  boxShadow: "40px",
  // maxHeight: "85%",
  // overflowY: "scroll",
  borderRadius: "1rem",
};
function TopUpModal({
  open,
  handleClose,
  formValues,
  cardName,
}) {
  const [btnOpen, setBtnOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const { info } = useStore();
  // const totalSteps = 5;

  const handleNext = (page) => {
    // setBtnOpen(false);
    // setCurrentStep((prevStep) => prevStep + 1);
    setCurrentStep((prevStep) => prevStep + page);
  };

  console.log(handleClose);

  const schema = yup
    .object()
    .shape({
      telephoneNo: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
      paymentCardNo: yup
        .string()
        .required("credit card is required")
        .matches(/^\d{16}$/, "Enter a valid 16-digit phone number"),
      nameOnPaymentCard: yup.string().required("Name on card is required"),
      expiryDateMonth: yup
        .string()
        .required("month is required is required")
        .matches(/^\d{2}$/, "Enter a valid 2-digit exp number"),
      expiryDateYear: yup
        .string()
        .required("Expiry date year is required")
        .matches(/^\d{2}$/, "Enter a valid 2-digit year number"),
      cvv: yup
        .string()
        .required("cvv  is required")
        .matches(/^\d{3}$/, "Enter a valid 3-digit cvv number"),

      paymentCardNo: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Enter a valid 10-digit phone number"),
      otp: yup
        .string()
        .required("OTP is required")
        .matches(/^\d{4}$/, "Enter a valid 4-digit OTP"),
      paymentMethodId: yup.string().required("select a network"),

      pin: yup
        .string()
        .required("PIN is required")
        .matches(/^\d{4}$/, "Enter a valid 4-digit PIN"),
      confirmPin: yup
        .string()
        .required("Confirm PIN is required")
        .oneOf([yup.ref("pin"), null], "PIN and Confirm PIN must match"),
      fullName: yup.string().required("name  is required"),
      gender: yup.string().required(),
      country: yup.string().required(),
      ageRange: yup.string().required(),
      country: yup.string().required(),
      regions: yup.string().required(),
      constituencies: yup.string().required(),
      industry: yup.string().required(),
      occupation: yup.string().required(),
      display_name_on_card: yup.string().required(),
      card_pickup_location: yup.string().required(),
      amount: yup
        .number()
        .required("Amount is required")
        .positive("Amount must be positive"),
    })
    .required();

  const defaultValues = {
    telephoneNo: formValues?.telephoneNo,
    otp: "",
    pin: "",
    fullName: "",
    country: "GH0233",
    userStatus: "",
    confirmPin: "",
    role: "",
    paymentMethod: "Debit card",
    paymentMethodId: "",
    amount: info.amount,
    memberId: formValues?.memberId,
    paymentCardNo: "",
    ndcCardNo: "",
    transType: "GGC",
    constituencies: "other",
    regions: "other",
    plan: "",
    momonumber: "",
    momoname: "",
    industry: "other",
    occupation: "other",
    ageRange: "other",
    userCardType: "",
    paymentUrl: "",
    resetPin: "",
    baseCardId: "",
    type: "",
  };

  const formHandler = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    formHandler.setValue("telephoneNo", formValues?.telephoneNo);
    formHandler.setValue("memberId", formValues?.memberId);
    formHandler.setValue("transType", "GGC");
    formHandler.setValue("fullName", cardName);
    formHandler.setValue("membername", cardName);

  }, [formValues?.telephoneNo]);

  const handleBack = (page) => {
    setCurrentStep((prevStep) => prevStep - page);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <SelectAmount
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
            formHandler={formHandler}
          />
        );

      case 2:
        return (
          <ChoosePayMethod
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
            handleBack={handleBack}
            formHandler={formHandler}
          />
        );

      case 3:
        return (
          <ReviewPaymentPage
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
            handleBack={handleBack}
            formHandler={formHandler}
          />
        );

      case 4:
        return (
          <PaySuccess
            formHandler={formHandler}
            setBtnOpen={setBtnOpen}
            handleNext={handleNext}
          />
        );

      case 5:
        return (
          <TransactionsTwo
            handleNext={handleNext}
            handleBack={handleBack}
            formHandler={formHandler}
            handleClose={handleClose}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="">
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={()=>{
          handleClose()
          setCurrentStep(1)

        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`bg-white p-3 p-md-3 ${
            currentStep === 2 || currentStep === 4
              ? "modalbehav"
              : currentStep === 7
              ? "sevenModal"
              : ""
          } `}
          style={style}
        >
          <div>
            <p>{/* Step {currentStep} of {totalSteps} */}</p>
          </div>

          {renderForm()}
        </div>
      </Modal>
    </div>
  );
}

export default TopUpModal;
