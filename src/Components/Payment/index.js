import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./Address Form";
import PersonalInfoForm from "./Personal Info Form";
import PlaceOrderForm from "./Place Order Form";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal Information", "Address & Delivery", "Place Order"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Personal Information";
    case 1:
      return "Address & Delivery";
    case 2:
      return "Place Order";
    default:
      return "Unknown stepIndex";
  }
}

export default function Payment() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 ? <PersonalInfoForm handleNext={handleNext} /> : null}
      </div>
      <div>
        {activeStep === 1 ? <AddressForm handleNext={handleNext} /> : null}
      </div>
      <div>
        {activeStep === 2 ? <PlaceOrderForm handleNext={handleNext} /> : null}
      </div>
    </div>
  );
}
