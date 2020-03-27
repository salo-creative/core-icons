import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icons from './icons';

const SVG = styled.svg.attrs({
  focusable: 'false'
})`
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
  title,
  standAlone,
  vAlign
}) => (
  <SVG
    className={ className }
    margin={ margin }
    size={ size }
    { ...(standAlone ? {
      role: 'img'
    } : {
      'aria-hidden': 'true'
    }) }
    vAlign={ vAlign }
    viewBox='0 0 24 24'
  >
    { title && <title>{ title }</title> }
    <path fill={ fill } d={ icons?.[icon] || 'M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z' } />
  </SVG>
);

Icon.defaultProps = {
  className: null,
  fill: '#00222b',
  icon: 'dashboard',
  standAlone: false,
  margin: '0',
  size: 24,
  title: null,
  vAlign: null
};

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  standAlone: PropTypes.bool,
  margin: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  vAlign: PropTypes.string
};

export default Icon;