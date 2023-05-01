import React from "react";
import { Container, Element, Image, Text, Highlight } from "./Section.styles";

import Appointment from "../../images/appointment.png";
import Order from "../../images/order.png";
import Reservation from "../../images/reservation.png";

import { useScreen } from "../../utils/ui/useScreen";

function Section() {
  const screen = useScreen();
  return (
    <Container screen={screen}>
      <Element>
        <Image src={Reservation} />
        <Text>
          <Highlight>Make</Highlight> a reservation
        </Text>
      </Element>
      <Element>
        <Image src={Order} />
        <Text>
          <Highlight>Order</Highlight> food
        </Text>
      </Element>
      <Element>
        <Image src={Appointment} />
        <Text>
          <Highlight>Make</Highlight> an appointment
        </Text>
      </Element>
    </Container>
  );
}

export default Section;
