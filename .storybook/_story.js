import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { H1, P, Container, Row, Column } from '@salo/core-ui';

import changes from './changelog.json';

// styled components
const Wrapper = styled.div`
  border: 10px solid #333;
  min-height: 100vh;

  *:not(li) > *:not(li):not(:first-child) {
    margin-top: 20px;
  }

  *:not(li) > h2:not(:first-child) {
    margin-top: 45px;
  }
`;

const StyledH1 = styled(H1)`
  text-transform: uppercase;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 25px;
`;

export const Changelog = () => {
  const users = {};
  changes.forEach((change) => {
    if (users[change.user] !== undefined) {
      users[change.user].count++;
    } else {
      users[change.user] = {
        count: 0,
        name: change.user
      };
      users[change.user].count++;
    }
  })

  return (
    <React.Fragment>
      <StyledH1>UI changelog</StyledH1>
      <Wrapper>
        <Container padding='25px'>
          <Row >
           <Column>
            { changes.map((change) => {
              return (
                <P margin='0' key={change.version}>
                  <strong>{change.version} - </strong>
                  {change.commit}
                  {change.user && ` (${change.user})`}
                </P>
              )
            })}
           </Column>
          </Row>
        </Container>
      </Wrapper>
    </React.Fragment>
  )
};

Changelog.story = {
  parameters: {
    info: {
      disable: true,
    },
    options: { showPanel: false },
  },
};

export default {
  title: 'Meta'
};