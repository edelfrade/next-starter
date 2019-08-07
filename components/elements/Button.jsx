import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'

const BaseButton = styled.button`
  max-width: 300px;
  width: 100%;
  display: block;
  white-space: nowrap;
  text-decoration: none;
  font-weight: 900;
  text-align: center;
  border: medium none;
  border-radius: 5px;
  padding: 15px 40px;
  font-size: 17px;
  line-height: 16px;
  cursor: pointer;
  margin: 0 auto;
  transition: all ease 0.3s;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border: 2px solid ${({ borderColor }) => borderColor};
  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground};
    color: ${({ hoverColor }) => hoverColor};
  }
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

const Button = ({ href, as, target, ...rest }) => (
  href ? (
    <Link {...{ href, as }} >
      <BaseButton as="a" {...{ target }} {...rest} />
    </Link>) :
    <BaseButton {...rest} />
);

Button.defaultProps = {
  target: '_self',
  className: '',
  disabled: false,
  onClick: () => null,
  background: '#fff',
  color: '#000',
  borderColor: '#000',
  hoverBackground: '#ebebeb',
  hoverColor: '#000',
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBackground: PropTypes.string,
  hoverColor: PropTypes.string,
};
export default Button;
