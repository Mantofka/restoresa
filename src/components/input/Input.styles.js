import styled from "styled-components";

import { darkColor, yellowColor } from "../../utils/styles/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Label = styled.label`
  color: ${darkColor};
  font-size: 14px;
  font-weight: 500;
`;

export const InputField = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid ${yellowColor};
  border-radius: 10px;
  padding: 0 10px;
  font-size: 12px;
  outline: none;
`;

export const ChangeText = styled.p`
  font-size: 14px;
  color: #334ccf;
  cursor: pointer;
`;
