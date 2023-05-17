import Avatar from "@mui/material/Avatar";
import React from "react";

function AvatarMUI(props) {
  return (
    <Avatar
      alt={props.alt}
      variant={props.varient ? props.varient : "square"}
      src={props.src}
      sx={{
        width: props.width ? props.width : 24,
        height: props.height ? props.height : 24,
      }}
    />
  );
}
export default AvatarMUI;
