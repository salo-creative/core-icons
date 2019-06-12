import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon, { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { GlobalStyles, Normalise, Theme } from '@salo/core-ui';

// COMPONENTS
import './storybook.scss';

addDecorator(
  withOptions({
    brandTitle: 'Icons',
    hierarchyRootSeparator: /\|/,
    brandUrl: 'https://github.com/SaloCreative/icons',
    showPanel: true,
    panelPosition: 'right'
  })
)

addDecorator(withInfo({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
  styles: {
    infoBody: {
      border: 'none',
      borderRadius: 0,
      boxShadow: 'none',
      padding: '0 20px',
      margin: 0
    },
    infoStory: {
      padding: '40px 20px'
    }
  },
  components: {
    p({ children }) {
      return <p>{children}</p>;
    },
  }
}))

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


function loadStories() {
  require('./_story');
  require('../src/_icon.story');
}

setAddon(infoAddon);

configure(loadStories, module);