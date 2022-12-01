import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import CardMedia from '@mui/material/CardMedia';
import StepLabel from "@mui/material/StepLabel";
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img5 from '../img/img5.jpg';
import SignForm from "./SignForm";
import MessageForm from "./MessageForm";
import CheckboxForm from "./CheckboxForm";
import UserDataService from '../services/user.services';
import { useSnackbar } from 'notistack';
import {
  useForm,
  FormProvider
} from "react-hook-form";

const steps = ["Sign Up", "Message", "Checkbox"];

const getStepImg = (step) => {
  switch (step) {
    case 0:
      return img2;
    case 1:
      return img1;
    case 2:
      return img5;
    default:
      return img5;
  }
}

const BaseStepper = () => {

  const [valid, setValid] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      dateofbirth: "",
      email: "",
      address: "",
      message: "",
      choice: "",
      gender: "",
    },
    mode:'all'
  });

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SignForm onValidation={onValidation} />;
      case 1:
        return <MessageForm />;
      case 2:
        return <CheckboxForm />;
      default:
        return "unknown step";
    }
  }

  const onValidation = (valid) => {
    setValid(valid)
  }

  const handleNext = async (data) => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {

      try {
        await UserDataService.addUser(data);
        enqueueSnackbar('Пользователь успешно зарегистрирован!', { autoHideDuration: 3000 });

      } catch (err) {
        enqueueSnackbar('Ошибка сети!', { autoHideDuration: 3000 });
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', height: '600px' }}>
      <Box sx={{ width: '35%', height: '100%' }}>
        <CardMedia
          component="img"
          sx={{ width: '100%', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', height: '100%' }}
          image={getStepImg(activeStep)}
          alt="Live from space album cover"
        />
      </Box>
      <Box sx={{ ml: 10, width: '65%', mt: '30px', mr: 10 }}>
        <Box sx={{ width: '100%' }}>
          <Stepper sx={{ gap: 5, paddingBottom: "20px" }} activeStep={activeStep} connector={null}>
            {steps.map((label) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>
                    {label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" sx={{ mt: 2, mg: 1 }}>{activeStep.length === steps.length ? ('Step' + activeStep/steps.length) : ''}</Typography>
        </Box>
        <Box sx={{ width: '100%', height: '80%' }}>
          {activeStep === steps.length ? (
            <>
              <Typography>
                Пользователь успешно зарегистрирован!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
              </Box>
            </>
          ) : (
            <Box sx={{ display: 'flex', width: '100%', height: '80%' }}>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                  <Box sx={{ width: '100%', height: '75%' }}>
                    {getStepContent(activeStep)}
                  </Box>
                  <Divider sx={{ mt: 5, mb: 1 }} />
                  <Box sx={{ width: '100%', height: '25%', display: 'flex', gap: 2, mt: 5, ml: 60 }}>
                    <Button
                      onClick={handleBack}
                      sx={activeStep === 0 ? { display: 'none' } : { fontSize: '12px', color: '#00008B', fontWeight: 'bold', width: '150px', height: '50px', ml: -20 }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={!valid}
                      sx={{ fontSize: '10px', width: '150px', height: '50px' }}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next Step"}
                    </Button>
                  </Box>
                </form>
              </FormProvider>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BaseStepper;