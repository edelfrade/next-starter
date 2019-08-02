import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeColors as Colors } from '../Theme';

const StyledDiv = styled.div`
  padding-top: 25px;
  margin-bottom: 15px;
  position: relative;
`;

const StyledValidation = styled.p`
  position: absolute;
  color: ${Colors.error};
  font-size: 12px;
  bottom: -15px;
  left: 0;
  margin: 0;
  padding: 0;
`;
const StyledCredit = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  margin: 0;
  padding: 0;
  height: 25px;
  img {
    display: inline-block;
    height: 100%;
    opacity: 0.3;
    margin: 0;
    &.active {
      opacity: 1;
    }
  }
`;
const StyledLabel = styled.label`
  padding-top: 25px;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 20px;
  text-transform: none;
  color: ${Colors.body};
`;
const StyledInput = styled.input`
  background-color: ${({ bg }) => bg};
  border: none;
  border-bottom: 3px solid #dfdfdf;
  width: 100%;
  height: 45px;
  line-height: 32px;
  box-sizing: border-box;
  padding: 0;
  outline: none;
  transition: all ease 0.3s;
  font-size: 20px;
  text-align: center;
  border-radius: 25px;
  &:focus {
    border-color: ${Colors.sprint_yellow};
  }
`;

const Input = ({
  id,
  clean,
  label,
  required,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  className,
  bg,
  type,
  validate,
}) => (
  <StyledDiv {...{ className }}>
    {label && (
    <StyledLabel {...{ clean }}>
      {label}
      {required ? ' *' : ''}
    </StyledLabel>
    )}
    <StyledInput
      autoComplete="off"
      {...{
        id, clean, name, placeholder, onChange, value, bg, type, onBlur,
      }}
    />
    {validate && <StyledValidation {...{ clean }}>{validate}</StyledValidation>}
  </StyledDiv>
);

Input.defaultProps = {
  className: 'input-field',
  bg: '#f7f7f7',
  type: 'text',
};
Input.propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
  type: PropTypes.string,
};
export default Input;
