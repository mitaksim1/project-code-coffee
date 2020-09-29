import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const user = localStorage.getItem('user');

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

Route.defaultProps = {
  isPrivate: false,
};
