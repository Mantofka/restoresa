import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  border-radius: 10px;
  background-color: #faf6f6;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
  }
`;

export const FooterContainer = styled.div`
  padding: 5px 10px;
`;
