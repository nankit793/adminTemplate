import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import AvatarMUI from "../Avatar";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
function PasswordInput(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <FormControl
        size={props.size ? props.size : "small"}
        fullWidth={props.fullWidth}
        variant="outlined"
        error={props.error}
      >
        <InputLabel htmlFor="outlined-adornment-password">
          {props.label}
        </InputLabel>
        <OutlinedInput
          value={props.value}
          onChange={props.onChange}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <AvatarMUI
                    src="./icons/hide.png"
                    alt="logo"
                    width={25}
                    height={25}
                  />
                ) : (
                  <AvatarMUI
                    src="./icons/view.png"
                    alt="logo"
                    width={25}
                    height={25}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
          label={props.label}
        />
      </FormControl>
    </>
  );
}

export default PasswordInput;
