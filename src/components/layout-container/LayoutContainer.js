import React from "react";
import { useSelector } from "react-redux";
import { selectScreen } from "../../redux/reducers/ui/ui.selectors";
import { Container } from "./LayoutContainer.styles";

function LayoutContainer({ children, ...restProps }) {
  const screen = useSelector(selectScreen);
  return (
    <Container {...restProps} screen={screen}>
      {children}
    </Container>
  );
}

export default LayoutContainer;
