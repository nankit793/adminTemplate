import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  if (!props.multiline) {
    return (
      <>
        <TextField
          error={props.error}
          id="outlined-error-helper-text"
          value={props.value}
          type={props.type ?? "text"}
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
  } else {
    return (
      <>
        <TextField
          error={props.error}
          multiline={true}
          id="outlined-error-helper-text"
          value={props.value}
          type={props.type ?? "text"}
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
}

export default InputField;
