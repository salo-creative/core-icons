import React from 'react';
import { render } from 'react-testing-library';


export const renderWithTheme = (node) => {
  return (
    render(
      <React.Fragment>
        { node }
      </React.Fragment>
    )
  );
};