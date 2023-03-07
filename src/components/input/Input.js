import React from "react";

import { Container, InputField, Label } from "./Input.styles";

function Input({label, ...restProps}) {
  return <Container>
    {label ? <Label>{label}</Label> : null}
    <InputField {...restProps}/>
  </Container>;
}

export default Input;
