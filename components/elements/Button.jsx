/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import { ThemeColors } from '../Theme';

const BtnStyles = `
max-width: 300px;
width: 100%;
display: block;
white-space: nowrap;
text-decoration: none;
font-weight: 900;
text-align: center;
border: medium none;
border-radius: 25px;
padding: 15px 40px;
font-size: 17px;
line-height: 16px;
cursor: pointer;
margin: 0 auto;
transition: all ease 0.3s;
&:disabled{
  cursor: default;
  background-color: #eaeaea;
  border: #eaeaea;
  &:hover{
    cursor: default;
    background-color: #eaeaea;
    border: #eaeaea;
  }
}
`;

const StyledATag = styled.a`
  ${BtnStyles};
  background-color: ${({ secondary }) => (secondary ? 'transparent' : ThemeColors.sprint_yellow)};
  color: ${({ secondary }) => (secondary ? '#fff' : '#000')};
  border: 2px solid ${({ secondary }) => (secondary ? '#fff' : ThemeColors.sprint_yellow)};
  &:hover {
    background-color: #fee084;
    color: ${({ secondary }) => (secondary ? '#fff' : '#000')};
  }
  &:not([href]) {
    cursor: default;
    background-color: #eaeaea;
    border: #eaeaea;
  }
`;
const StyledButton = styled.button`
  ${BtnStyles};
  background-color: ${({ secondary }) => (secondary ? 'transparent' : ThemeColors.sprint_yellow)};
  color: ${({ secondary }) => (secondary ? '#fff' : '#000')};
  border: 2px solid ${({ secondary }) => (secondary ? '#fff' : ThemeColors.sprint_yellow)};
  &:hover {
    background-color: #fee084;
    color: ${({ secondary }) => (secondary ? '#fff' : '#000')};
  }
`;

const Button = ({ className, children, link, onClick, disabled, secondary, target }) => 
(link ? (disabled ? (
    <StyledATag
      className={`btnBook ${className}`}
      {...{
        target, onClick, disabled, secondary,
      }}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  ) : (
    <Link href={link} passHref>
      <StyledATag {...{ target, onClick, disabled, secondary, className }} dangerouslySetInnerHTML={{ __html: children }} />
    </Link>
  )
) : (
  <StyledButton {...{ disabled, secondary, onClick, className }} dangerouslySetInnerHTML={{ __html: children }} />
));

Button.defaultProps = {
  link: null,
  target: '_self',
  className: '',
  secondary: false,
  disabled: false,
  onClick: () => null,
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
