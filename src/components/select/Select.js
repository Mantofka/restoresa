import React from "react";

import { SelectField, Option } from "./Select.styles";

function Select({ options, ...restProps }) {
  return (
    <SelectField {...restProps}>
      {options.map((option, id) => (
        <Option key={id}>{option}</Option>
      ))}
    </SelectField>
  );
}

export default Select;
