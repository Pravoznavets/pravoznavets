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
import DeskInLibraryImg1x from "assets/images/MainPage/deskinlibrary1x.png";
import DeskInLibraryImg2x from "assets/images/MainPage/deskinlibrary2x.png";
import ceo1 from "assets/images/CEO/ceo1.jpg";

const Services: FC = () => {
  return (
    <ServicesContainer>
      <Container>
        <ServiceSectionTitle>Чим ми займаємося</ServiceSectionTitle>
        <ServiceList>
          <ServiceItem>
            <Img
              srcSet={`${ceo1} 1x, ${ceo1} 2x`}
              src={ceo1}
              alt="Ноутбук, Офис, Рука, Пишу, Бизнес"
            />
            <ServiceText>
              Ви хочете відкрити свій бізнес? Ми допоможемо вам у цьому.
              Звернувшись до нас, ви отримаєте юридичну допомогу з питань,
              пов'язаних з <b>реєстрацією підприємств</b> усіх
              організаційно-правових форм та фізичної особи - підприємця.
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <Img
              srcSet={`${DeskImg1x} 1x, ${DeskImg2x} 2x`}
              src={DeskImg2x}
              alt="Ноутбук, Офіс, Пишу, Юрист, Бізнес, Право"
            />
            <ServiceText>
              Починаючи свій бізнес, ми часто не приділяємо уваги захисту наших
              прав на фірмове найменування та товарний знак. Ми згадуємо про це
              лише в той момент, коли наші права на його використання обмежені.
              <b> Реєстрація товарного знаку</b> - це серйозна інвестиція, яка
              дозволить захистити ваш бізнес від порушень та стане обличчям
              вашої компанії. Ви можете з впевненістю доручити нам усю роботу,
              пов'язану з реєстрацією товарного знаку, від складання та подання
              заявки до отримання Свідоцтва на знак для товарів і послуг.
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <Img
              srcSet={`${LampImg1x} 1x, ${LampImg2x} 2x`}
              src={LampImg2x}
              alt="Лампа антикваріат на столі у юриста"
            />
            <ServiceText>
              <b>Реєстрація штрих-коду</b> має важливе значення для роботи
              торгових підприємств, без якого вони не можуть здійснювати продажі
              та весь свій обліковий процес. Ми швидко та успішно виконаємо всі
              процедури з реєстрації штрих-коду, звільнивши вас від зайвих
              клопотів.
            </ServiceText>
          </ServiceItem>
          <ServiceItem>
            <Img
              srcSet={`${DeskInLibraryImg1x} 1x, ${DeskInLibraryImg2x} 2x`}
              src={DeskInLibraryImg2x}
              alt="Молоток, Весы, Блюдо, Справедливость"
            />
            <ServiceText>
              Крім того, ми надаємо послуги з <b>юридичного супроводження </b>
              господарської діяльності підприємства: складання актів, наказів,
              договорів, угод, позовних заяв та інших документів.
            </ServiceText>
          </ServiceItem>
        </ServiceList>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
