import styled from "styled-components";
import { darkColor } from "../../utils/styles/styles";

export const ShadowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  font-size: 22px;
  color: ${darkColor};
  font-weight: 700;
  margin-bottom: 20px;
`;
