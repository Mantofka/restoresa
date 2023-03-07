import React from 'react'

import { SelectField, Option } from './Select.styles'

function Select({options}) {
  return (
    <SelectField>
        {options.map(option => <Option>{option}</Option>)} 
    </SelectField>
  )
}

export default Select;