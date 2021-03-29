import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import "./Login.css";
import "./App.css";

function Login() {
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [showUsernameError, setShowUsernameError] = useState<boolean>(false);
  const [showPasswordError, setShowPasswordError] = useState<boolean>(false);

  function changeUsername(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setUsername(event.target.value);
  }

  function changePassword(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassword(event.target.value);
  }

  function login() {
    setShowUsernameError(false);
    setShowPasswordError(false);
    //Validate username and password:
    if (username === "mocto" && password === "HelloCodingItForward!") {
      //Go to welcome page if username and password are correct
      history.push("/welcome", { login: true });
    } else {
      //Show red error warning at top of screen
      setShowError(true);
      //Check which field is incorrect and highlight that input box:
      if (username !== "mocto") {
        setShowUsernameError(true);
      }
      if (password !== "HelloCodingItForward!") {
        setShowPasswordError(true);
      }
    }
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="Login-page"
      direction="column"
    >
      {showError && (
        <Alert severity="error" className="Error">
          <AlertTitle>Incorrect username or password</AlertTitle>
          Please enter a different value into the input box highlighted in red
        </Alert>
      )}
      <Typography className="Login__header">
        Welcome to the Coding It Forward page of the NYC Mayor's Office Of The
        CTO
      </Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        justify="center"
        alignItems="center"
        xs={12}
        sm={6}
        className="Login-form"
      >
        <Grid item xs={12} className="FormElements">
          <Typography className="Login__text">Please login</Typography>
        </Grid>
        <Grid item xs={12} className="FormElements">
          <TextField
            error={showUsernameError}
            label="Username"
            variant="outlined"
            onChange={changeUsername}
            className="TextFields"
          />
        </Grid>
        <Grid item xs={12} className="FormElements">
          <TextField
            error={showPasswordError}
            label="Password"
            variant="outlined"
            type="password"
            onChange={changePassword}
            className="TextFields"
          />
        </Grid>
        <Grid item xs={12} className="FormElements">
          <Button onClick={login} className="Button">
            Login
          </Button>
        </Grid>
      </Grid>
      <img alt="nyc logo" src="/nyc-logo.png" className="Login__nyc-logo" />
    </Grid>
  );
}

export default Login;
