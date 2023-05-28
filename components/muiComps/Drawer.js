import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import AvatarMUI from "./Avatar";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="superbackImageTwo h-screen"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className="w-full flex justify-end p-2 "
        onClick={toggleDrawer(anchor, false)}
      >
        <AvatarMUI src="./icons/cancel.png" alt="logo" width={20} height={20} />
      </div>
      {props.content}
    </Box>
  );

  {
    /* {["left", "right", "top", "bottom"].map((anchor) => ( */
  }
  return (
    <div>
      <React.Fragment key={props.anchor ? props.anchor : "left"}>
        <div onClick={toggleDrawer(props.anchor ? props.anchor : "left", true)}>
          {props.button}
        </div>
        <Drawer
          anchor={props.anchor ? props.anchor : "left"}
          open={state[props.anchor ? props.anchor : "left"]}
          onClose={toggleDrawer(props.anchor ? props.anchor : "left", false)}
        >
          {list(props.anchor ? props.anchor : "left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
