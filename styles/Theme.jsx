import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  error: '#ca3030',
  facebook: '#3B5998',
  twitter: '#1DA1F2',
  linkedin: '#0077B5',
  google: '#DB4437',
  pinterest: '#BD081C',
  instagram: '#262626',
  links: '#640088',
};

const Breakpoints = {
  mobile: 320,
  landscape: 480,
  tablet: 769,
  desktop: 1008,
  widescreen: 1250,
  fullhd: 1392,
};

const ThemeWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  -webkit-tap-highlight-color: rgba(254,196,9, 0.5) !important;
`;

const Theme = ({ children }) => <ThemeWrapper>{children}</ThemeWrapper>;

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
export {
  Colors, Breakpoints,
};
