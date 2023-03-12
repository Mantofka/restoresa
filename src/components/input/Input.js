import React, { forwardRef } from "react";

import { Container, InputField, Label } from "./Input.styles";

const Input = forwardRef(({ label, ...restProps }) => {
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <InputField {...restProps} />
    </Container>
  );
});

export default Input;
