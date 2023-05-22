import styled from "styled-components";
import { InlineWrapper as Wrapper } from "../../utils/styles/styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const InlineWrapper = styled(Wrapper)`
  gap: 40px;
  justify-content: center;
`;

export const Image = styled.img`
  width: 40%;
`;
