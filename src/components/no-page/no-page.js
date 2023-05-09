import React from "react";
import { MiddleScreen } from "../../utils/styles/styles";
import LayoutContainer from "../layout-container/LayoutContainer";
import { Column, Image, Title } from "./no-page.styles";

import FourOhFour from "../../images/404.png";
import { useScreen } from "../../utils/ui/useScreen";

function NoPage() {
  const screen = useScreen();
  return (
    <LayoutContainer>
      <MiddleScreen>
        <Column screen={screen}>
          <Image src={FourOhFour} alt='' />
          <Title>Sorry, this page is currently eating a donut.</Title>
        </Column>
      </MiddleScreen>
    </LayoutContainer>
  );
}

export default NoPage;
