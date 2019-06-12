import React from 'react';
import 'jest-styled-components';

// HELPERS
import { renderWithTheme } from '../test';

// COMPONENT
import Icon from './index';

test('Render default Icon tag and styles', async () => {
  // Render
  const { container } = renderWithTheme(
    <Icon />
  );
  const svg = container.firstChild;
  const path = container.querySelector('path');
  // Assert
  expect(svg).toHaveAttribute('style', 'width: 24px; height: 24px; margin: 0px;');
  expect(path).toHaveAttribute('d', 'M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z');
  expect(path).toHaveAttribute('fill', '#00222b');
  expect(container.firstChild).toMatchSnapshot();
});

test('Render Icon with core props', async () => {
  // Render
  const { container } = renderWithTheme(
    <Icon fill='#fff' size={ 100 } margin='10px' icon='pencil' />
  );
  const svg = container.firstChild;
  const path = container.querySelector('path');
  // Assert
  expect(svg).toHaveAttribute('style', 'width: 100px; height: 100px; margin: 10px;');
  expect(path).toHaveAttribute('fill', '#fff');
  expect(path).toHaveAttribute('d', 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z');
  expect(container.firstChild).toMatchSnapshot();
});

test('Render Icon with invalid icon', async () => {
  // Render
  const { container } = renderWithTheme(
    <Icon icon='foobarbaz' />
  );
  const path = container.querySelector('path');
  // Assert
  expect(path).toHaveAttribute('d', 'M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z');
  expect(container.firstChild).toMatchSnapshot();
});