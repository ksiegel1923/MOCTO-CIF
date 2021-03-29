import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

import "./App.css";
import "./Welcome.css";

function WelcomePage() {
  const history = useHistory();

  //Check if user has already logged in (they were redirected from login page)
  useEffect(() => {
    let loginHistory = history.location.state;
    //If user was not previously at the login page then redirect user to login page
    loginHistory === undefined && history.push("/login");
  });

  //When user clicks the logout button they will be redirected to the login page
  function logout() {
    history.push("/login");
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Typography className="Welcome__header">
        Congratulations, you have successfully signed in!
      </Typography>
      <Typography className="Welcome__text">
        Now you can explore the different projects that the coding it forward
        group has been working on for the NYC Mayor's Office of the CTO
      </Typography>
      <Grid item xs={12} sm={6}>
        <Button onClick={logout} className="Button">
          Logout
        </Button>
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
