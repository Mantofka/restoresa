import styled, { css } from "styled-components";

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
  ${({ screen }) =>
    screen === "md" &&
    css`
      width: 100vw;
      border-radius: 0px;
    `}
  ${({ screen }) =>
    screen === "sm" &&
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
