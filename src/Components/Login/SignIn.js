import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useUser } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';


const theme = createTheme();

export const LoginForm = () => {
  const nav = useNavigate();

  const emailRef = useRef();


  const { signIn, user, errMsg } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toastId = useRef(null);


  const CloseButton = ({ closeToast }) => (
    
    <i
      className="material-icons"
      onClick={() => {closeToast(); setTimeout(()=>{
        window.location.reload(false);
    }, 500);}}
    >
      x
    </i>
  );

  useEffect(() => {
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    if (user) {
      console.log("IsUser")
      if (user.role === 1) {
        console.log("User is Admin")
        nav('/admin')
      } else {
        nav('/');
      }
    }
    if (errMsg === true) {
      console.log(errMsg)

      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("E-Mail-Adresse / Passwort falsch.  Bitte versuchen es erneut.", {
          autoClose: false,
          position: toast.POSITION.BOTTOM_CENTER,
          theme: "colored"
        })
        setTimeout(()=>{
          window.location.reload(false);
      }, 8000);
      }
    }
  }, [user, nav, errMsg])


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
    setTimeout(()=>{
      window.location.reload(false);
  }, 10000);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className="d-flex m-auto border rounded border-3 align-item-center mt-5">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#184B29" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Einloggen
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              ref={emailRef}
              label="E-Mail Addresse"
              name="email"
              value={email}
              autoComplete="off"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Kennwort"
              type="password"
              id="password"
              value={password}
             // autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#184B29" }}
              onClick={() => {
                signIn(email, password);
              }}
            >
              Einloggen
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              {/* <Grid item>
                <Link href="/register" variant="body">
                  {"Du hast kein Konto? Anmeldung"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <ToastContainer
         closeButton={CloseButton}
         reload 
         transition={Zoom} 
         style={{ width: "300px", bottom: "25rem" }} />
      </Container>
    </ThemeProvider>
  );
}