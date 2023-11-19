import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function GgcRegForm() {
  const schema = yup
    .object()
    .shape({
      fullName: yup.string().required("name  is required"),
    })
    .required();
  const {  handleSubmit, register, formState: {errors}  } = useForm({ 
    mode: "onChange",
    resolver: yupResolver(schema),
  });
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
    console.log("Form data:", data);
    // Add your form submission logic here
  };

  return (
    <div>
      <h1 className="text-center">Good Gov. Card Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-md-flex gap-4 justify-content-between">
          <div className="">
            <label htmlFor="" className="mb-1">
              Card type{" "}
            </label>
            <select
              className="form-select  p-3"
              {...register("cards")}
              defaultValue={defaultValues.cards.one}
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

            <div className="marginInput">
              {/* <InputLabel htmlFor="full-name">Full Name</InputLabel> */}
              <label htmlFor="" className="mb-1">
                Enter your full name{" "}
              </label>

              <input
                className="form-control p-3"
                placeholder="Full name"
                {...register("fullName")}
              />
             {errors.fullName && <p className="invalid-feedback">{errors.fullName.message}</p>}
            </div>

            <div className="marginInput">
              <label htmlFor="" className="mb-1">
                Select country{" "}
              </label>

              <select {...register("country")} className="form-select p-3">
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

            <div className="d-flex gap-4 w-100 justify-content-between marginInput">
              <div>
                <label htmlFor="" className="mb-1">
                  Gender
                </label>

                <select
                  style={{ width: "100px" }}
                  {...register("gender")}
                  className="form-select p-3 "
                  // defaultValue={defaultValues.gender.male}
                >
                  <option value="" disabled selected hidden>
                    Gender
                  </option>

                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb">
                <label htmlFor="" className="mb-1">
                  Age range{" "}
                </label>

                <select
                  {...register("ageRange")}
                  style={{ width: "150px" }}
                  className="form-select p-3 mb"
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
          </div>
          <div className=" w-100">
            <div className="">
              <label htmlFor="" className="mb-1">
                Industry
              </label>

              <select {...register("industry")} className="form-select p-3">
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

            <div className="marginInput">
              <label htmlFor="" className="mb-1">
                Occupation{" "}
              </label>

              <select {...register("occupation")} className="form-select p-3">
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

            <div className="marginInput">
              <label htmlFor="" className="mb-1">
                Display name on card{" "}
              </label>

              <select
                {...register("display_name_on_card")}
                className="form-select p-3"
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

            <div className="marginInput">
              <label htmlFor="" className="mb-1">
                Card pick location{" "}
              </label>

              <select
                {...register("card_pickup_location")}
                className="form-select p-3"
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

        <button
          onClick={() => {
            onSubmit();
          }}
        >
          log
        </button>
      </form>
    </div>
  );
}

export default GgcRegForm;
