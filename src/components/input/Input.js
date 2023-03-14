import React, { forwardRef } from "react";

import { Container, InputField, Label } from "./Input.styles";

const Input = forwardRef(({ label, ...restProps }, ref) => {
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}
      <InputField ref={ref} {...restProps} />
    </Container>
  );
});

export default Input;
