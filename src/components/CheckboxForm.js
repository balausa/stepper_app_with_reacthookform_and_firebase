import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { IconButton, Paper } from "@mui/material";
import {
  useForm,
  Controller,
  useFormContext,
} from "react-hook-form";

const CheckboxForm = () => {

  const [checked, setChecked] = useState(true);
  const { control } = useFormContext();

  const handleChange = event => {
    setChecked(false);
  };

  const MaleCheckbox = () => {
    return (
      <IconButton
        disabled={checked}
        color="primary"
        value="male"
        sx={{
          width: '100%',
          height: 100
        }}>
        <ManIcon
          sx={{
            width: '100%',
            height: 100
          }}>
        </ManIcon>
      </IconButton>
    )
  }

  const FemaleCheckbox = () => {
    return (
      <IconButton
        disabled={checked}
        color="primary"
        value="male"
        sx={{
          width: '100%',
          height: 100
        }}>
        <WomanIcon
          sx={{
            width: '100%',
            height: 100
          }}>
        </WomanIcon>
      </IconButton>
    )
  }

  return (
    <Box sx={{ width: '100%', height: '80%', borderColor: '#191970' }}>
      <Typography variant="h5" sx={{ mt: 1, mb: 1, color: "#191970", fontWeight: 'bold' }} gutterBottom>
        CheckBox
      </Typography>
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                width: '100%',
                height: 100,
                borderColor: '#1E90FF',

              }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="gender"
                row
                sx={{ mt: 2 }}
                {...field}
              >
                <FormControlLabel value="male" control={
                  <Radio
                    disabled={checked}
                    icon={
                      <Paper sx={{
                        width: '250px',
                        height: 100,
                        opacity: [0.9, 0.7, 0.5],
                        borderRadius: 2
                      }}>
                        <MaleCheckbox />
                      </Paper>
                    }
                    checkedIcon={
                      <Paper sx={{
                        width: '250px',
                        height: 100,
                        borderRadius: 2,
                        backgroundColor: '#1E90FF',

                      }}>
                        <MaleCheckbox />
                      </Paper>
                    }
                  />
                }
                />

                <FormControlLabel value="female" control={
                  <Radio
                    disabled={checked}
                    icon={
                      <Paper sx={{
                        width: '250px',
                        height: 100,
                        opacity: [0.9, 0.7, 0.5],
                        borderRadius: 2
                      }}>
                        <FemaleCheckbox />
                      </Paper>
                    }
                    checkedIcon={
                      <Paper sx={{
                        width: '250px',
                        height: 100,
                        borderRadius: 2,
                        backgroundColor: '#1E90FF',

                      }}>
                        <FemaleCheckbox />
                      </Paper>
                    }
                  />
                }
                />
              </RadioGroup>
            </Box>
          )}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <RadioGroup
          defaultValue="male"
          name="choose"
          row
          sx={{ gap: 2, mt: 5 }}
        >
          <FormControlLabel
            value="dafault"
            control={
              <Radio
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                onChange={() => setChecked(true)}
                checked={checked}
              />
            }
            label="I want to add this option."
          />
          <FormControlLabel
            value="manual"
            control={
              <Radio
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                onChange={handleChange}
              />}
            label="Let me click on this checkbox and choose some cool stuf." />
        </RadioGroup>
      </Box>
    </Box>
  );
};
export default CheckboxForm;