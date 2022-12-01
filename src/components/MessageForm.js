import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const MessageForm = () => {

  const { control } = useFormContext();

  return (
    <Box sx={{ width: '100%', height: '80%' }}>
      <Typography variant="h5" sx={{ mt: 1, mb: 1, color: "#191970", fontWeight: 'bold' }} gutterBottom>
        Message
      </Typography>
      <Box sx={{ width: '100%', height: '80%' }}>
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <TextareaAutosize
              id="message"
              label="Message"
              style={{ width: '600px', height: '100%', borderColor: 'lightblue', borderRadius: 5 }}
              margin="normal"
              {...field}
            />
          )}
        />
      </Box>
      <Box sx={{ width: '100%', height: '20%' }}>
        <Controller
          control={control}
          name="choice"
          render={({ field }) => (
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="one"
              name="choice"
              row
              sx={{ gap: 2, mt: 2 }}
              {...field}
            >
              <FormControlLabel value="one" control={<Radio />} label="The number one choice" />
              <FormControlLabel value="two" control={<Radio />} label="The number two choice" />
            </RadioGroup>
          )}
        />
      </Box>
    </Box>
  );
};

export default MessageForm;