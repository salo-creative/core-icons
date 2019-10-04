import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from 'lodash';

import icons from './icons';

const SVG = styled.svg`
  height: ${ ({ size }) => (typeof size === 'number' ? `${ size }px` : size) };
  width: ${ ({ size }) => (typeof size === 'number' ? `${ size }px` : size) };
  margin: ${ ({ margin }) => margin };
  vertical-align: ${ ({ vAlign }) => vAlign };
`;

const Icon = ({
  className,
  fill,
  icon,
  margin,
  size,
  vAlign
}) => (
  <SVG
    className={ className }
    margin={ margin }
    size={ size }
    vAlign={ vAlign }
    viewBox='0 0 24 24'
  >
    <path fill={ fill } d={ get(icons, `${ icon }`, 'M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z') } />
  </SVG>
);

Icon.defaultProps = {
  className: null,
  fill: '#00222b',
  icon: 'dashboard',
  margin: '0',
  size: 24,
  vAlign: null
};

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.number,
  vAlign: PropTypes.string
};

export default Icon;