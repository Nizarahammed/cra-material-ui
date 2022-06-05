import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  CardHeader,
  IconButton,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { createTheme, ThemeProvider } from "@mui/material";
import { TextField, Grid, Paper, Card } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#fefefe'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          align="center"
        >
          Create React App with material UI
        </Typography>


        <Button
          className='btn'
          variant="contained"
          color="primary"
          onClick = {() => console.log('button clicked')}
          sx={{
              backgroundColor: 'red',
              color: '#fff',
          }}
        >
          Contained button
        </Button>
        <Button
          className='btn'
          variant="contained"
          color="secondary"
          onClick = {() => console.log('button clicked')}
        >
          Contained button
        </Button>
        <br />
        <br />
        <Button
          variant="outlined"
          disabled
          onClick = {() => console.log('button clicked')}
        >
          Contained button
        </Button>
        <br />
        <br />
        <ButtonGroup>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>
        <br />
        <br />


        <ArrowForwardIosOutlinedIcon />
        <ArrowForwardIosOutlinedIcon color="primary" fontSize="large"/>
        <ArrowForwardIosOutlinedIcon color="secondary" fontSize="small" />
        <br />
        <br />


        <form noValidate autoComplete="off">
          <TextField
            label="label"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="details"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            error={true}
          />
        </form>

        <Grid container>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <Card>
              <CardHeader 
                title="card title"
                subheader="card subheader"
                action={
                  <IconButton>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                }
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}><Card>
              <CardHeader 
                title="card title"
                subheader="card subheader"
                action={
                  <IconButton>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                }
              />
            </Card></Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}><Card>
              <CardHeader 
                title="card title"
                subheader="card subheader"
                action={
                  <IconButton>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                }
              />
            </Card></Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}><Card>
              <CardHeader 
                title="card title"
                subheader="card subheader"
                action={
                  <IconButton>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                }
              />
            </Card></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
};

export default App;