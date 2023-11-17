import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

function GgcRegForm() {
  const { control, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Add your form submission logic here
  };

  return (
    <div>
      <h1 style={{ fontSize: "20px", textAlign: "center" }}>
        Good Gov. Card Registration
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel sx={{ fontSize: "16px" }} id="demo-select-small-label">
            Card
          </InputLabel>
          <Controller
            name="card"
            control={control}
            defaultValue="Loyalty GHS 250"
            render={({ field }) => (
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Card"
                {...field}
                sx={{ fontSize: "14px" }}
              >
                <MenuItem value="Loyalty GHS 250">Loyalty GHS 250</MenuItem>
                <MenuItem value="Another Option">Another Option</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl variant="filled" sx={{ mt: 2, minWidth: "100%" }}>
          <InputLabel htmlFor="full-name">Full Name</InputLabel>
          <Input
            id="full-name"
            {...register("fullName", { required: "This field is required" })}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Controller
            name="gender"
            control={control}
            defaultValue="Male"
            render={({ field }) => (
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Gender"
                {...field}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="age-range-label">Age range</InputLabel>
          <Controller
            name="ageRange"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="age-range-label"
                id="age-range"
                label="Age range"
                {...field}
              >
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
                <MenuItem value="30">Thirty</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="country-label">Country</InputLabel>
          <Controller
            name="country"
            control={control}
            defaultValue="Ghana"
            render={({ field }) => (
              <Select
                labelId="country-label"
                id="country"
                label="Country"
                {...field}
              >
                <MenuItem value="Ghana">Ghana</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="Industry-label">Industry</InputLabel>
          <Controller
            name="Industry"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="Industry-label"
                id="Industry"
                label="Industry"
                {...field}
              >
                <MenuItem value="technology">technology</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="Occupation-label">Occupation</InputLabel>
          <Controller
            name="Occupation"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="Occupation-label"
                id="Occupation"
                label="Occupation"
                {...field}
              >
                <MenuItem value="software engineer">software engineer</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="Display-name-on-card-label">
            Display name on card
          </InputLabel>
          <Controller
            name="Display-name-on-card"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="Display-name-on-card-label"
                id="Display-name-on-card"
                label="Display-name-on-card"
                {...field}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl
          variant="filled"
          sx={{ mt: 2, minWidth: "100%" }}
          size="small"
        >
          <InputLabel id="Card-pickup-location-label">
            Card pickup location
          </InputLabel>
          <Controller
            name="Card-pickup-location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="Card-pickup-location-label"
                id="Card-pickup-location"
                label="Card-pickup-location"
                {...field}
              >
                <MenuItem value="accra">accra</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <Button
          type="submit"
          sx={{
            mt: 3,
            backgroundColor: "green",
            color: "white",
            width: "100%",
            padding: 2,
            borderRadius: "22px",
          }}
        >
          Make Payment
        </Button>
      </form>
    </div>
  );
}

export default GgcRegForm;
