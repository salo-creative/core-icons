import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles, Normalise, Theme } from '@salo/core-ui';
import { addParameters } from '@storybook/react';

// COMPONENTS
import './storybook.scss';

addParameters({
  options: {
    brandTitle: 'Icons',
    brandUrl: 'https://github.com/SaloCreative/icons',
    showPanel: true,
    panelPosition: 'right'
  }
});

addDecorator(story => {
  return (
    <Theme>
      <React.Fragment>
        <Normalise />
        <GlobalStyles />
        { story() }
      </React.Fragment>
    </Theme>
  )
} );

configure([
  require.context('./', true, /_story.js/),
  require.context('../src', true, /\.story\.js$/)
], module);