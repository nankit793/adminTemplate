import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function HorizontalStepper(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        classes="text-[red]"
        activeStep={props.currentPage}
        alternativeLabel
      >
        {props.steps?.map((label) => (
          <Step key={label}>
            <StepLabel>
              <div className="font-rubik text-color_5">{label}</div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
