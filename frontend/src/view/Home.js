import React, { useEffect, useState } from "react";
import { Container, Grid, Card, TextField, Stack } from "@mui/material";
import "./index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import LoadingButton from '@mui/lab/LoadingButton';

// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import FilledInput from '@mui/material/FilledInput';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Visibility from '@mui/icons-material/Visibility';
import { useDispatch,useSelector } from "react-redux";
import {loginAction} from "../redux/auth/actions";

const styles = { width: "100%", height: "100vh" };
const ViewComponent = (props) => {
  // const [values, setValues] = React.useState({
  //   password: '',
    
  //   showPassword: false,
  // });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email,setEmail] =useState();
  const [password,setPassword] = useState();
  const {token,isFetching} = useSelector((state)=> state?.auth);

  const login = () =>{
    loginAction ({email,password})(dispatch)
  }

  useEffect(()=>{
    if(token){
      navigate("/dashboard");
    }
  },[token])
 

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  return (
    <Container sx={styles}>
      <Grid
        sx={styles}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
          <Card className="signin_container">
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <img src={logo} alt="logo" />
              <label>Signin Shop Managment</label>

              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
               <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
                 {/* <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  onChange={(e) => setPassword (e.target.value)}

                </IconButton>
              </InputAdornment>
            }

          />
        </FormControl> */}
              <LoadingButton
               loading = {isFetching}
               fullWidth
               variant ="contained"
               onClick={() =>{
                console.log({password,email});
                login();
               }}
              >
                Signin
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Container>
  );
};

export default ViewComponent;




