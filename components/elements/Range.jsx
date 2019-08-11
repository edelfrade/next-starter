import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  appearance: none;
  width: 100%;
  height: 10px;
  background: #f2f2f2;
  outline: none;
  opacity: 0.7;
  transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    appearance: none;
    appearance: none;
    width: 50%;
    height: 10px;
    background: #ff3b30;
    cursor: pointer;
  }
`;

const Input = ({ ...rest }) => <StyledInput type="range" {...rest} />;

Input.defaultProps = {};
Input.propTypes = {};
export default Input;
