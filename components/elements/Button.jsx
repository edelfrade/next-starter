import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { Colors } from "../../styles/Theme";

const BaseButton = styled.button`
  max-width: 300px;
  width: 150px;
  display: block;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  border: medium none;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
  margin: 0 auto;
  transition: all ease 0.3s;
  font-size: 20px;
  font-family: "HelveticaNeue";
  font-weight: 600;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border: 2px solid ${({ borderColor }) => borderColor};
  &:hover {
    background-color: ${({ hoverBackground }) => hoverBackground};
    color: ${({ hoverColor }) => hoverColor};
  }
  &:disabled {
    cursor: default;
    background-color: #eaeaea;
    border: #eaeaea;
    &:hover {
      cursor: default;
      background-color: #eaeaea;
      border: #eaeaea;
    }
  }
`;

const Button = ({ href, as, target, ...rest }) =>
  href ? (
    <Link {...{ href, as }}>
      <BaseButton as="a" {...{ target }} {...rest} />
    </Link>
  ) : (
    <BaseButton {...rest} />
  );

Button.defaultProps = {
  target: "_self",
  className: "",
  disabled: false,
  onClick: () => null,
  background: Colors.primary,
  color: "#000",
  borderColor: "#000",
  hoverBackground: "#ebebeb",
  hoverColor: "#000"
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
  hoverColor: PropTypes.string
};
export default Button;
