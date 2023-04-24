import styled from "styled-components";
import { InlineWrapper } from "../../utils/styles/styles";

export const Image = styled.img`
  height: 80px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Wrapper = styled(InlineWrapper)`
  justify-content: flex-start;
  padding: 0;
  gap: ${({ gap }) => gap};
`;
