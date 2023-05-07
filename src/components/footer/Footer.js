import React from "react";
import Anchor from "../nav-achor/Anchor";

import {
  Container,
  FooterText,
  Column,
  Bottom,
  CompanyTitle,
  TopSection,
} from "./Footer.styles";
import { isMobileSize } from "../../utils/ui";

import { useScreen } from "../../utils/ui/useScreen";

function Footer() {
  const screen = useScreen();
  return (
    <Container>
      <Column justify={"space-between"} style={{minHeight: '120px'}}>
        <TopSection>
          {!isMobileSize(screen, "md") && (
            <Column columnWidth={"180px"}>
              <CompanyTitle>Restoresa</CompanyTitle>
              <FooterText>Reserve and order food at the same time.</FooterText>
            </Column>
          )}
          <Column>
            <FooterText title>FOR CLIENTS</FooterText>
            <Anchor href='/me'>
              <FooterText>Profile</FooterText>
            </Anchor>
          </Column>
          <Column>
            <FooterText title>RESTORESA</FooterText>
            <Anchor href={"/restaurants"}>
              <FooterText>Restaurants</FooterText>
            </Anchor>
          </Column>
        </TopSection>
        <Bottom>
          <FooterText>
            This project is created for University' module.
          </FooterText>
        </Bottom>
      </Column>
    </Container>
  );
}

export default Footer;
