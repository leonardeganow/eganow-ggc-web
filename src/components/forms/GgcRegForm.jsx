import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useStore from "../../formstore/formStore";
import customerSetupsGRPC from "../../api/grpcapi/customerSetupsGRPC";
import membersGRPC from "../../api/grpcapi/membersGRPC";
import { ToastContainer, toast } from "react-toastify";

function GgcRegForm(props) {
  const { getRegions, getConstituencies, getAgeRange } = customerSetupsGRPC();
  const { registerMember } = membersGRPC();

  const [regions, setRegions] = React.useState([]);
  const [constituencies, setConstituencies] = React.useState([]);
  const [ageRange, setAgeRange] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const { info } = useStore();
  const watchCountries = props.formHandler.watch("country");
  const watchRegions = props.formHandler.watch("regions");

  async function handleGetRegions() {
    try {
      const response = await getRegions();
      setRegions(response.regionsList);
      console.log(response);
    } catch (error) {}
  }

  console.log(props.formHandler.watch("cards"));

  const filteredList = constituencies.filter(
    (constituency, i) => constituency.regionid === watchRegions
  );

  async function handleGetConstituencies() {
    try {
      const response = await getConstituencies();
      setConstituencies(response.constituenciesList);
      // console.log(response);
      // console.log(watchRegions);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    // console.log(watchCountries);
    if (watchCountries === "Ghana") {
      handleGetRegions();
      handleGetConstituencies();
    }
  }, [watchCountries]);

  async function getAgeRangeHandler() {
    try {
      const response = await getAgeRange();
      setAgeRange(response.agerangesList);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getAgeRangeHandler();
  }, []);

  const onSubmit = async () => {
    const data = props.formHandler.getValues();
    console.log(data);
    const result = await props.formHandler.trigger([
      "cards",
      "card_pickup_location",
      "display_name_on_card",
      "constituencies",
      "regions",
      "country",
      "gender",
      "fullName",
    ]);

    if (!result) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await registerMember(data);
      // toast(response.message);
      setIsLoading(false);
      props.formHandler.reset(data);
      console.log(response);
      if (response.status) {
        toast.success(response.message);

        props.handleNext(1);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      setIsLoading(false);
      props.formHandler.reset(data);
      console.error(error);
    }
  };

  const cardDisplay = props.cardTypeValues?.filter(
    (params, i) => params.cardtypeid === info.cardid
  );
  return (
    <div>
      <h1 className="text-center">Good Gov. Card Registration</h1>
      <form>
        <div className="">
          <div className=" d-flex flex-column gap-3">
            <div>
              <h6 htmlFor="" className="mb-1">
                Card type{" "}
              </h6>
              <select
                className="form-select w-100 p-3"
                {...props.formHandler.register("cards")}
              >
                <option value={info.cardid} selected>
                  {/* {defaultValues.cards.one} */}
                  {info.cardType}
                </option>
                {props.cardTypeValues.map((cards, i) => {
                  return (
                    <option key={i} value={cards.cardtypeid}>
                      {cards.cardtypename}
                    </option>
                  );
                })}
                {/* <option value={defaultValues.cards.two}>
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
                </option> */}
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

            <div className="d-flex gap-2">
              <div className="w-50">
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

              <div className="w-50">
                <h6 htmlFor="" className="mb-1">
                  Select country{" "}
                </h6>

                <select
                  {...props.formHandler.register("country")}
                  className={`form-select p-3 ${
                    props.formHandler.formState.errors.country
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option value="" disabled selected hidden>
                    Country
                  </option>

                  <option value="Ghana">Ghana</option>
                  <option value="Other">other</option>
                </select>
              </div>

              {/* <div className="">
                <h6 htmlFor="" className="mb-1">
                  Age range{" "}
                </h6> */}

              {/* <select
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

                  {ageRange.map((param, i) => {
                    return (
                      <option key={param.agerangeid} value={param.agerangeid}>
                        {param.agerangename}
                      </option>
                    );
                  })}

                  <option value={defaultValues.ageRange.one}>
                    {defaultValues.ageRange.one}
                  </option>
                  <option value={defaultValues.ageRange.two}>
                    {defaultValues.ageRange.two}
                  </option>
                  <option value={defaultValues.ageRange.three}>
                    {defaultValues.ageRange.three}
                  </option>
                </select> */}
              {/* </div> */}
            </div>

            <div className="d-flex gap-2">
              <div className="w-50">
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

                      {regions.map((region, i) => {
                        return (
                          <option key={region.regionid} value={region.regionid}>
                            {region.regionname}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>
              <div className="w-50">
                {props.formHandler.watch("country") === "Ghana" &&
                  props.formHandler.watch("regions") && (
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

                        {filteredList.map((constituency, i) => {
                          return (
                            <option
                              key={constituency.constituencyid}
                              value={constituency.constituencyid}
                            >
                              {constituency.constituencyname}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
              </div>
            </div>
          </div>

          <div className="d-md-flex flex-column  gap-3 mt-3">
            {/* <div className="">
              <h6 htmlFor="" className="mb-1">
                Industry
              </h6>

              <input
                className={`form-control p-3 ${
                  props.formHandler.formState.errors.industry
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Enter industry"
                {...props.formHandler.register("industry")}
              />
            </div> */}

            {/* <div className="">
              <h6 htmlFor="" className="mb-1">
                Occupation{" "}
              </h6>

              <input
                className={`form-control p-3 ${
                  props.formHandler.formState.errors.occupation
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Enter occupation"
                {...props.formHandler.register("occupation")}
              />
            </div> */}

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

                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>

            <div className="">
              <h6 htmlFor="" className="mb-1">
                Card pick location{" "}
              </h6>

              <input
                className={`form-control p-3 ${
                  props.formHandler.formState.errors.card_pickup_location
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Enter card pick up location"
                {...props.formHandler.register("card_pickup_location")}
              />
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
        <div className=" d-flex justify-content-end py-4">
          {/* <button
            onClick={() => {
            props.han
            }}
            type="button"
            className="btn btn-success "
          >
            back
          </button> */}
          <button
            // style={{ width: "160px" }}
            type="button"
            onClick={onSubmit}
            className="btn btn-success"
            disabled={isLoading}
          >
            {isLoading ? (
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
