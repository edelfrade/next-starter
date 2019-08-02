import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select`
  appearance: none;
  outline: none;
  border: 0;
  border-bottom: none;
  box-shadow: none;
  color: #000;
  border-radius: 0;
  font-size: 16px;
  padding: 0 0 0 20px;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  height: 50px;
  text-align: 'center';
  border-radius: 25px;
  cursor: pointer;
  background-image: url('${process.env.ASSET_PREFIX}/static/images/icons/dropdown_arrow.svg');
  background-repeat: no-repeat;
  background-position:  calc(100% - 15px) center;
  background-color: #fff;
  background-size: 20px auto;
  margin: 0 10px;
  &::-ms-expand {
    display: none;
  }
`;

const Select = ({
  options,
  onChange,
  className,
  initialLabel,
  defaultValue,
  disabled,
  id,
  name,
}) => (
  <StyledSelect
    {...{
      id, className, onChange, disabled, name,
    }}
    value={defaultValue}
  >
    {initialLabel && (
      <option value="" label={initialLabel} dangerouslySetInnerHTML={{ __html: initialLabel }} />
    )}
    {options.map(({ display, value }) => (
      <option value={value} label={display} key={value} dangerouslySetInnerHTML={{ __html: display }} />
    ))}
  </StyledSelect>
);

Select.defaultProps = {
  initialLabel: null,
  name: '',
};
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  initialLabel: PropTypes.string,
  name: PropTypes.string,
};
export default Select;
