import React from "react";

import { useScreen } from "../../utils/ui/useScreen";

import { SectionTitle } from "../../utils/styles/styles";

import { useSelector } from "react-redux";

import Loader from "../loader/Loader";

import {
  Title,
  DarkenText,
  Column,
  ElementContainer,
} from "../payment-progress/Progress.styles";

import { InformationContainer } from "./Customer.styles";
import { isMobileSize } from "../../utils/ui";
import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

function Customer() {
  const screen = useScreen();
  const user = useSelector(selectCurrentUser);
  return (
    <div
      style={!isMobileSize(screen, "md") ? { flex: 0.4 } : { width: "100%" }}
    >
      <SectionTitle style={{ marginBottom: "10px" }}>
        Customer Information
      </SectionTitle>

      <ElementContainer screen={screen}>
        {user ? (
          <>
            <InformationContainer>
              <Column>
                <Title>Full Name</Title>
                <DarkenText>{user.displayName}</DarkenText>
              </Column>
              <Column>
                <Title>Email</Title>
                <DarkenText>{user.email}</DarkenText>
              </Column>
            </InformationContainer>
            <Column justify={"flex-start"}>
              <Title>Phone Number</Title>
              <DarkenText>{user.phoneNumber || "Not specified"} </DarkenText>
            </Column>
          </>
        ) : (
          <Loader />
        )}
      </ElementContainer>
    </div>
  );
}

export default Customer;
