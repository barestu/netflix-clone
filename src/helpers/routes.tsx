import React, { ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IUserRedirect extends RouteProps {
  user: any;
  loggedInPath: string;
  children: ReactNode;
}

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...rest
}: IUserRedirect) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

interface IProtectedRoute extends RouteProps {
  user: any;
  children: ReactNode;
}

export function ProtectedRoute({
  user,
  children,
  ...rest
}: IProtectedRoute) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
