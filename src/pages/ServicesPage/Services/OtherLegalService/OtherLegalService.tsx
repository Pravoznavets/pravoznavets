import Container from "components/Container";
import React, { FC } from "react";
import {
  ServiceContainer,
  ServiceList,
  ServiceListItem,
  ServiceTitle,
} from "../Services.styled";

const OtherLegalService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Інші юридичні послуги</ServiceTitle>
        <ServiceList>
          <ServiceListItem>Реєстрації касового апарату</ServiceListItem>
          <ServiceListItem>Кадрові питання</ServiceListItem>
          <ServiceListItem>Питання захисту прав споживачів</ServiceListItem>
          <ServiceListItem>
            Питання готельно-ресторанного господарства
          </ServiceListItem>
          <ServiceListItem>
            Супроводження на перевірках з усіма органами державної влади
          </ServiceListItem>
        </ServiceList>
      </ServiceContainer>
    </Container>
  );
};

export default OtherLegalService;
