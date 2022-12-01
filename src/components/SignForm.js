import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import UserDataService from '../services/user.services';
import { useSnackbar } from 'notistack';
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const SignForm = ({ onValidation }) => {

  const { enqueueSnackbar } = useSnackbar();

  const { control, 
    formState: {
    errors
    } 
} = useFormContext();  

  const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = async (email) => {
    try {
      const docSnap = await UserDataService.getEmail(email);
      const isValid = isValidEmail(email);
      if (docSnap.length > 0) {
        onValidation(false);
        return errors.email = "Email уже существует";
      }
      else if (!isValid) {
        onValidation(false);
        return errors.email = "Введите правильный формат email";
      }
      else {
        onValidation(true);
        return isValid;
      }
    } catch (err) {
      onValidation(false);
      enqueueSnackbar('Ошибка!', { autoHideDuration: 3000 });
    }
  }

  return (
    <Box sx={{ width: '100%', height: '80%' }}>
      <Typography variant="h5" sx={{ mt: 1, mb: 1, color: "#191970", fontWeight: 'bold' }} gutterBottom>
        Sign UP
      </Typography>
      <Grid container sx={{ mt: 1 }}>
        <Grid container sx={{ display: 'flex', gap: 3 }}>
          <Controller
            control={control}
            name="firstname"
            rules={{
              required: "Обязательное поле!",
              minLength: {
                value: 3,
                message: 'Минимум 3 символа'
              },
              maxLength: {
                value: 15,
                message: 'Запись должна содержать максимум 15 символов'
              }
            }}
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                margin="normal"
                error={!!errors["firstname"]}
                helperText={errors.firstname ? errors.firstname.message : ''}
                sx={{ mt: 2, width: '48%' }}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="lastname"
            rules={{
              required: "Обязательное поле!",
              minLength: {
                value: 3,
                message: 'Минимум 3 символа'
              },
              maxLength: {
                value: 15,
                message: 'Запись должна содержать максимум 15 символов'
              }
            }}
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                margin="normal"
                error={!!errors['lastname']}
                helperText={errors['lastname'] ? errors['lastname'].message : ''}
                sx={{ mt: 2, width: '48%' }}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid container sx={{ display: 'flex', gap: 3 }}>
          <Controller
            control={control}
            name="dateofbirth"
            render={({ field }) => (
              <TextField
                id="dateofbirth"
                label="Date Of Birth"
                type="date"
                sx={{ mt: 2, width: "48%" }}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={
              {required: "Обязательное поле!",
              validate: handleEmailValidation}
            }        
            render={({ field }) => (
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                placeholder="Enter Your email"
                margin="normal"
                error={!!errors['email']}
                helperText={errors['email'] ? errors["email"].message : ''}
                sx={{ mt: 2, width: '48%' }} 
                {...field}                          
              />
            )}
          />
        </Grid>
        <Grid container sx={{ mt: 2 }}>
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                type="address"
                sx={{ mt: 2, width: "100%" }}
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignForm;