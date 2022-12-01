import BaseStepper from "./components/BaseStepper";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";

const App = () => {
  return (
    <>
      <Container  component={Box} p={6}  >
        <Paper sx={{ borderRadius: '25px' }} component={Box} elevation={4}>
          <BaseStepper />
        </Paper>
      </Container>
    </>
  );
}

export default App;