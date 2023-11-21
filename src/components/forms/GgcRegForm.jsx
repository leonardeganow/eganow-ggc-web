import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useStore from "../../formstore/formStore";

function GgcRegForm(props) {
  const { info } = useStore();
  const schema = yup
    .object()
    .shape({
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
    })
    .required();
  // const {
  //   handleSubmit,
  //   register,
  //   watch,
  //   getValues,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  //   resolver: yupResolver(schema),
  // });

  React.useEffect(() => {
    props.formHandler.setValue("cards", info.cardType);
  }, []);

  const defaultValues = {
    cards: {
      one: "standard",
      two: "hope",
      three: "silver",
      four: "prestige",
      five: "platinum",
      six: "loyalty",
      seven: "justice",
      eight: "gold",
      nine: "freedom",
      ten: "bronze",
      eleven: "stanarisedard",
    },

    fullName: "",
    gender: {
      male: "male",
      female: "female",
    },

    country: {
      ghana: "Ghana",
      other: "other",
    },

    regions: {
      one: "greater accra",
      two: "cape coast",
    },
    constituencies: {
      one: "ayawaso",
      two: "lezokuku",
    },
    ageRange: {
      one: "18-24",
      two: "25-40",
      three: "above 60",
    },
    industry: {
      one: "finance",
      two: "agriculture",
      three: "sports",
    },
    occupation: {
      one: "farmer",
      two: "teacher",
      three: "nurse",
    },
    display_name_on_card: {
      one: "yes",
      two: "no",
    },

    card_pickup_location: {
      one: "accra",
      two: "eastlegon",
    },
  };

  const onSubmit = (data) => {
    props.handleNext();
    const pin = props.formHandler.getValues();
    console.log(pin);
  };

  return (
    <div>
      <h1 className="text-center">Good Gov. Card Registration</h1>
      <form onSubmit={props.formHandler.handleSubmit(onSubmit)}>
        <div className="d-md-flex  gap-3  justify-content-around">
          <div className=" d-flex gap-3 flex-column">
            <div>
              <h6 htmlFor="" className="mb-1">
                Card type{" "}
              </h6>
              <select
                className="form-select  p-3"
                {...props.formHandler.register("cards")}
              >
                <option value={defaultValues.cards.one}>
                  {defaultValues.cards.one}
                </option>
                <option value={defaultValues.cards.two}>
                  {defaultValues.cards.two}
                </option>
                <option value={defaultValues.cards.three}>
                  {defaultValues.cards.three}
                </option>
                <option value={defaultValues.cards.four}>
                  {defaultValues.cards.four}
                </option>
                <option value={defaultValues.cards.five}>
                  {defaultValues.cards.five}
                </option>
                <option value={defaultValues.cards.six}>
                  {defaultValues.cards.six}
                </option>
                <option value={defaultValues.cards.seven}>
                  {defaultValues.cards.seven}
                </option>
                <option value={defaultValues.cards.eight}>
                  {defaultValues.cards.eight}
                </option>
                <option value={defaultValues.cards.nine}>
                  {defaultValues.cards.nine}
                </option>
                <option value={defaultValues.cards.ten}>
                  {defaultValues.cards.ten}
                </option>
                <option value={defaultValues.cards.eleven}>
                  {defaultValues.cards.eleven}
                </option>
              </select>
            </div>

            <div className="">
              {/* <InputLabel htmlFor="full-name">Full Name</InputLabel> */}
              <h6 htmlFor="" className="mb-1">
                Enter your full name{" "}
              </h6>

              <input
                className={`form-control p-3 ${
                  props.formHandler.formState.errors.fullName
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Full name"
                {...props.formHandler.register("fullName")}
              />
              {/* {errors.fullName && (
                <p className="invalid-feedback">{errors.fullName.message}</p>
              )} */}
            </div>

            <div className="">
              <h6 htmlFor="" className="mb-1">
                Select country{" "}
              </h6>

              <select
                {...props.formHandler.register("country")}
                className={`form-select p-3 ${
                  props.formHandler.formState.errors.country ? "is-invalid" : ""
                }`}
              >
                <option value="" disabled selected hidden>
                  Country
                </option>

                <option value={defaultValues.country.ghana}>
                  {defaultValues.country.ghana}
                </option>
                <option value={defaultValues.country.other}>
                  {defaultValues.country.other}
                </option>
              </select>
            </div>

            {props.formHandler.watch("country") === "Ghana" && (
              <div>
                <h6 htmlFor="" className="mb-1">
                  Select regions{" "}
                </h6>

                <select
                  {...props.formHandler.register("regions")}
                  className={`form-select p-3 ${
                    props.formHandler.formState.errors.regions
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option value="" disabled selected hidden>
                    Regions
                  </option>

                  <option value={defaultValues.regions.one}>
                    {defaultValues.regions.one}
                  </option>
                  <option value={defaultValues.regions.two}>
                    {defaultValues.regions.two}
                  </option>
                </select>
              </div>
            )}

            {props.formHandler.watch("country") === "Ghana" &&
              props.formHandler.watch("regions") === "greater accra" && (
                <div>
                  <h6 htmlFor="" className="mb-1">
                    Select constituencies{" "}
                  </h6>

                  <select
                    {...props.formHandler.register("constituencies")}
                    className={`form-select p-3 ${
                      props.formHandler.formState.errors.constituencies
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <option value="" disabled selected hidden>
                      constituencies
                    </option>

                    <option value={defaultValues.constituencies.one}>
                      {defaultValues.constituencies.one}
                    </option>
                    <option value={defaultValues.constituencies.two}>
                      {defaultValues.constituencies.two}
                    </option>
                  </select>
                </div>
              )}
          </div>

          <div className="d-md-flex flex-column  gap-4">
            <div className="d-flex gap-2">
              <div className=" ">
                <div>
                  <h6 htmlFor="" className="mb-1">
                    Gender
                  </h6>

                  <select
                    // style={{ width: "100px" }}
                    {...props.formHandler.register("gender")}
                    className={`form-select p-3 ${
                      props.formHandler.formState.errors.gender
                        ? "is-invalid"
                        : ""
                    }`}
                    // defaultValue={defaultValues.gender.male}
                  >
                    <option value="" disabled selected hidden>
                      Gender
                    </option>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="">
                <h6 htmlFor="" className="mb-1">
                  Age range{" "}
                </h6>

                <select
                  {...props.formHandler.register("ageRange")}
                  // style={{ width: "140px" }}
                  className={`form-select p-3 ${
                    props.formHandler.formState.errors.ageRange
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option value="" disabled selected hidden>
                    Age range
                  </option>

                  <option value={defaultValues.ageRange.one}>
                    {defaultValues.ageRange.one}
                  </option>
                  <option value={defaultValues.ageRange.two}>
                    {defaultValues.ageRange.two}
                  </option>
                  <option value={defaultValues.ageRange.three}>
                    {defaultValues.ageRange.three}
                  </option>
                </select>
              </div>
            </div>

            <div className="">
              <h6 htmlFor="" className="mb-1">
                Industry
              </h6>

              <select
                {...props.formHandler.register("industry")}
                className={`form-select p-3 ${
                  props.formHandler.formState.errors.industry
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option value="" disabled selected hidden>
                  Industry
                </option>

                <option value={defaultValues.industry.one}>
                  {defaultValues.industry.one}
                </option>
                <option value={defaultValues.industry.two}>
                  {defaultValues.industry.two}
                </option>
                <option value={defaultValues.industry.three}>
                  {defaultValues.industry.three}
                </option>
              </select>
            </div>

            <div className="">
              <h6 htmlFor="" className="mb-1">
                Occupation{" "}
              </h6>

              <select
                {...props.formHandler.register("occupation")}
                className={`form-select p-3 ${
                  props.formHandler.formState.errors.occupation
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option value="" disabled selected hidden>
                  Occupation
                </option>

                <option value={defaultValues.occupation.one}>
                  {defaultValues.occupation.one}
                </option>
                <option value={defaultValues.occupation.two}>
                  {defaultValues.occupation.two}
                </option>
                <option value={defaultValues.occupation.three}>
                  {defaultValues.occupation.three}
                </option>
              </select>
            </div>

            <div className="">
              <h6 htmlFor="" className="mb-1">
                Display name on card{" "}
              </h6>

              <select
                {...props.formHandler.register("display_name_on_card")}
                className={`form-select p-3 ${
                  props.formHandler.formState.errors.display_name_on_card
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option value="" disabled selected hidden>
                  Display name on card
                </option>

                <option value={defaultValues.display_name_on_card.one}>
                  {defaultValues.display_name_on_card.one}
                </option>
                <option value={defaultValues.display_name_on_card.two}>
                  {defaultValues.display_name_on_card.two}
                </option>
              </select>
            </div>

            <div className="">
              <h6 htmlFor="" className="mb-1">
                Card pick location{" "}
              </h6>

              <select
                {...props.formHandler.register("card_pickup_location")}
                className={`form-select p-3 ${
                  props.formHandler.formState.errors.card_pickup_location
                    ? "is-invalid"
                    : ""
                }`}
              >
                <option value="" disabled selected hidden>
                  Card pick up location
                </option>

                <option value={defaultValues.card_pickup_location.one}>
                  {defaultValues.card_pickup_location.one}
                </option>
                <option value={defaultValues.card_pickup_location.two}>
                  {defaultValues.card_pickup_location.two}
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* <button
          className="btn btn-success my-2"
          onClick={() => {
            onSubmit();
          }}
        >
          Continue
        </button> */}
        <div className=" d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-success">
            {props.formHandler.formState.isSubmitting ? (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            ) : (
              "submit"
            )}
          </button>
          {/* <input type="submit" className="btn btn-success" /> */}
        </div>
      </form>
    </div>
  );
}

export default GgcRegForm;
