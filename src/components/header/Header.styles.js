import styled, { css } from "styled-components";
import { yellowColor, darkColor } from "../../utils/styles/styles";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 70px;
  width: 80vw;
  margin: 0 auto;
  background-color: #23212b;
  border-radius: 0px 0px 10px 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;

  ${({ screen }) =>
    (screen === "sm" || screen === "md") &&
    css`
      width: 100vw;
      border-radius: 0px;
      ${CombinedSection} {
        gap: 15px;
      }
    `}
  ${({ screen }) =>
    screen === "xs" &&
    css`
      width: 100vw;
      border-radius: 0px;
      ${ProjectTitle} {
        font-size: 24px;
      }
      ${Text} {
        font-size: 14px;
      }
      ${CombinedSection} {
        gap: 10px;
      }
    `}
`;

export const ProjectTitle = styled.h1`
  font-size: 32px;
  color: white;
  font-weight: 700;
`;

export const CombinedSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${({ color }) => color || "#fff"};
  ${(props) =>
    props.active &&
    css`
      color: #fa5729;
    `}
`;

export const ProfileIcon = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #fff;
  cursor: pointer;
`;

export const OrderContainerButton = styled(motion.button)`
  background-color: ${yellowColor};
  color: ${darkColor};
  font-size: 16px;
  border-radius: 15px;
  width: 150px;
  border: none;
  line-height: 20px;
  padding: 6px 12px;
  cursor: pointer;
`;
