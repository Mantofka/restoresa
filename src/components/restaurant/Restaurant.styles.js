import styled from "styled-components";
import { motion } from "framer-motion";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 250ms ease-in-out;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  border-radius: 10px;
  background-color: #faf6f6;
  cursor: pointer;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(27, 27, 27, 0.2);
  box-shadow: 1px 1px 4px 0px rgba(27, 27, 27, 0.2);
  &:hover {
    ${Image} {
      transform: scale(1.05);
    }
  }
`;

export const FooterContainer = styled.div`
  padding: 5px 10px;
`;
