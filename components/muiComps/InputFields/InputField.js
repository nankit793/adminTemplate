import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  return (
    <>
      <TextField
        error={props.error}
        id="outlined-error-helper-text"
        value={props.value}
        fullWidth={props.fullWidth}
        className=""
        size={props.size ? props.size : "small"}
        label={props.label}
        variant={props.variant ? props.variant : "outlined"}
        helperText={props.error && props.helperText}
        onChange={props.onChange}
      />
    </>
  );
}

export default InputField;
