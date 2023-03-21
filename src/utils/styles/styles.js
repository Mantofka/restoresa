import styled, { css } from "styled-components";

export const darkColor = "#23212b";
export const highlightColor = "#fa5729";
export const greyColor = "#4E4A5A";
export const yellowColor = "#FECE52";

export const LayoutContainer = styled.div`
  width: min(80vw, 1200px);
  margin: 0 auto;
  min-height: calc(100vh);
  padding-bottom: 20px;
  ${({ screen }) =>
    (screen === "md" || screen === "sm") &&
    css`
    width: 92vw;
  }
`}
`;

export const HeaderText = styled.h1`
  color: ${darkColor};
  font-weight: 700;
  font-size: 32px;
`;

export const FoodTitle = styled.h1`
  color: ${darkColor};
  font-weight: 600;
  font-size: 18px;
`;

export const DescriptionText = styled.h1`
  color: ${greyColor};
  font-weight: 400;
  font-size: 14px;
`;

export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "inherit"};
  gap: ${({ placeGap }) => placeGap || `0px`};
`;

export const OutlinedButton = styled.button`
  border-radius: 10px;
  border: 1px solid ${darkColor};
  width: 100%;
  height: 45px;
  background: none;
  font-size: 14px;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 45px;
  background-color: ${yellowColor};
  font-size: 14px;
  color: ${darkColor};
  font-weight: 600;
  cursor: pointer;
`;

export const Bubble = styled.div`
  background-color: #fece52;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ screen }) =>
    screen === "md" &&
    css`
width: 450px;
height: 450px;
}
`}
  ${({ screen }) =>
    screen === "sm" &&
    css`
  width: 300px;
  height: 300px;
  }
`}
@media screen and (max-width: 850px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 770px) {
    width: 280px;
    height: 280px;
  }
  @media screen and (max-width: 670px) {
    width: 250px;
    height: 250px;
  }
`;

export const PickupText = styled.h1`
  color: ${darkColor};
  font-size: 56px;
  width: ${({ width }) => width || "10ch"};
  font-weight: 800;
  ${({ screen }) =>
    screen === "md" &&
    css`
      font-size: 44px;
    }
  `}
  ${({ screen }) =>
    screen === "sm" &&
    css`
    font-size: 38px;
  }
`}
`;

export const ErrorText = styled.p`
  color: #ff0033;
  font-size: 12px;
  font-weigth: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 320px;
  ${({ screen }) =>
    screen === "sm" &&
    css`
    width: 270px;
  }
`}
`;
