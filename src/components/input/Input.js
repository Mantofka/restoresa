import React, { forwardRef } from "react";

import { Container, InputField, Label, ChangeText } from "./Input.styles";

const Input = forwardRef(
  ({ label, changeField, onChangeFieldClick, wrong, ...restProps }, ref) => {
    return (
      <Container>
        {label ? <Label>{label}</Label> : null}
        <InputField wrong={wrong} ref={ref} {...restProps} />
        {changeField ? (
          <ChangeText onClick={onChangeFieldClick}>{changeField}</ChangeText>
        ) : null}
      </Container>
    );
  }
);

export default Input;
