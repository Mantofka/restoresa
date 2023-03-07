import styled from "styled-components";

import { yellowColor, darkColor } from "../../utils/styles/styles";

export const SelectField = styled.select`
  width: 120px;
  border: 1px solid ${yellowColor};
  height: 35px;
  outline: none;
  color: ${darkColor};
  font-size: 16px;
  border-radius: 10px;
  padding: 0 10px;
`;

export const Option = styled.option``;
