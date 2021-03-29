import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const LoginPage = lazy(() => import("./Login"));
const WelcomePage = lazy(() => import("./WelcomePage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route
            exact
            path="/login"
            render={(): ReactElement => <LoginPage />}
          />
          <Route
            exact
            path="/welcome"
            render={(): ReactElement => <WelcomePage />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
