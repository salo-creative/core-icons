import React from 'react';
import { render } from '@testing-library/react';


export const renderWithTheme = (node) => {
  return (
    render(
      <React.Fragment>
        { node }
      </React.Fragment>
    )
  );
};