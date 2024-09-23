import { FC } from "react";
import {
  Img,
  ServiceItem,
  ServiceList,
  ServiceSectionTitle,
  ServiceText,
  ServicesContainer,
} from "./Services.styled";
import Container from "components/Container";

import DeskImg1x from "assets/images/MainPage/woodendesk-1x.jpg";
import DeskImg2x from "assets/images/MainPage/woodendesk-2x.jpg";
import LampImg1x from "assets/images/MainPage/lamp-1x.jpg";
import LampImg2x from "assets/images/MainPage/lamp-2x.jpg";
// import OldCityImg1x from "assets/images/MainPage/oldcity-1x.jpg";
// import OldCityImg2x from "assets/images/MainPage/oldcity-2x.jpg";
// import DeskInLibraryImg1x from "assets/images/MainPage/deskinlibrary1x.png";
// import DeskInLibraryImg2x from "assets/images/MainPage/deskinlibrary2x.png";
// import ceo1 from "assets/images/CEO/ceo1.jpg";

const Services: FC = () => {
  return (
    <ServicesContainer>
      <Container>
        <ServiceSectionTitle>Наші послуги</ServiceSectionTitle>
        <ServiceList>
          <ServiceItem>
            <Img
              srcSet={`${LampImg1x} 1x, ${LampImg2x} 2x`}
              src={LampImg2x}
              alt="Лампа антикваріат на столі у юриста"
            />
            <ServiceText>
              <b>Юридичні послуги для організацій</b> <br />
              Якщо ви плануєте відкрити бізнес або вже керуєте підприємством,
              наше адвокатське об'єднання стане вашим надійним юридичним
              партнером. Ми пропонуємо комплексну правову підтримку з реєстрації
              підприємств усіх організаційно-правових форм, а також фізичних
              осіб-підприємців. Окрім цього, ми надаємо послуги з реєстрації
              торговельних марок та авторських прав, супроводжуємо під час
              податкових перевірок, допомагаємо з отриманням ліцензій та
              дозволів, а також забезпечуємо складання та аналіз договорів. Наші
              фахівці ретельно оцінюють бізнес-процеси, виявляючи потенційні
              ризики, і готові захищати ваші інтереси у судових спорах.
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <Img
              srcSet={`${DeskImg1x} 1x, ${DeskImg2x} 2x`}
              src={DeskImg2x}
              alt="Ноутбук, Офіс, Пишу, Юрист, Бізнес, Право"
            />
            <ServiceText>
              <b>Юридичні послуги для фізичних осіб</b> <br />
              Якщо ви потребуєте правового захисту для себе чи своєї родини, ми
              готові запропонувати кваліфіковану допомогу з різних питань. Наші
              послуги включають реєстрацію права власності на нерухомість і
              транспортні засоби, захист ваших інтересів у суді, вирішення
              сімейних справ (зокрема розлучення та стягнення аліментів), а
              також захист персональних даних і прав споживачів. Ми допоможемо
              вам вирішити будь-яку юридичну проблему, щоб ви відчували себе
              захищеними у будь-яких ситуаціях.
            </ServiceText>
          </ServiceItem>
        </ServiceList>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
