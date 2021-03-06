import React from 'react';
import { withTests } from '@storybook/addon-jest';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import styled from 'styled-components';
import {
  colours, P, Column, Row
} from '@salo/core-ui';

// TESTS
import results from '../.storybook/jest-test-results.json';

// FEATURED COMPONENT
import Icon from './icon';
import icons from './icons';

// README //
import README from './README.md';

// Start of story logic
const iconKeys = Object.keys(icons);

// STYLES
const Wrapper = styled.div`
  padding: 40px 10px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${ colours.grey };
`;


const StyledP = styled(P)`
  text-align: center;
  font-weight: 700;
  padding: 5px 0;
  margin: 30px 0 10px;
  background: #fff;
`;


export const Basic = () => {
  const fill = text('Fill', '#262729');
  const size = number('Size', 24);
  return (
    <Row>
      { iconKeys.map(val => {
        return (
          <Column tablet={ 6 } medium={ 4 } large={ 3 } key={ val }>
            <Wrapper>
              <Icon icon={ val } fill={ fill } size={ size } />
              <StyledP>{ val }</StyledP>
            </Wrapper>
          </Column>
        );
      }) }
    </Row>
  );
};

Basic.story = {
  decorators: [
    withKnobs,
    withTests({
      results
    })
  ],
  parameters: {
    notes: README,
    jest: ['icon']
  }
};

export default {
  title: 'Icon'
};