import Container from "components/Container";
import { FC } from "react";
import { Link } from "react-router-dom";
import Service1Img from "assets/images/ServicesPage/service1.jpg";
import Service3Img from "assets/images/ServicesPage/service3.jpg";
import Service4Img from "assets/images/ServicesPage/service4.jpg";
import Service5Img from "assets/images/ServicesPage/service5.jpg";
import Service7Img from "assets/images/ServicesPage/service7.jpg";
import Service8Img from "assets/images/ServicesPage/service8.jpg";
import {
  FullServiceList,
  ServiceHiddenText,
  ServiceListItem,
  StyledImg,
  Thumb,
  ServiceTitle,
  ServiceDescription,
  SectionsContainer,
} from "./ServicesPage.styled";

const ServicesPage: FC = () => {
  return (
    <SectionsContainer>
      <Container>
        <FullServiceList>
          <ServiceListItem>
            <Link to="/">
              <Thumb>
                <StyledImg src={Service1Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Діяльність всіх суб'єктів господарювання, пов'язана з
                    виробництвом і реалізацією, як оптовою, так і роздрібною,
                    алкогольних напоїв підлягає обов'язковій ліцензії.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Ліцензія на алкоголь</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="/">
              <Thumb>
                <StyledImg src={Service7Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Отдельным аспектом нашей деятельности является осуществление
                    комплекса действий, связанных с правовым сопровождением
                    Вашего бизнеса.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Правові послуги</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="/">
              <Thumb>
                <StyledImg src={Service8Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    На сьогоднішній день через інтернет набагато простіше
                    займатися бізнесом, знаючи деякі правила просування та
                    розкрутки веб-сайтів. Якщо ще й грамотно використовувати
                    можливості правильно складеного доменного імені, віддача
                    буде більш ефективною за відсотком отримання прибутку. Але
                    все починається з реєстрації.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Реєстрація домена UA</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="/">
              <Thumb>
                <StyledImg src={Service4Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Щоб заощадити час і уникнути паперової метушні, зверніться
                    до нас для грамотного оформлення вашого бізнесу. Ми
                    допоможемо вам у виборі організаційно-правової форми і
                    складемо установчі документи, що захистять вас у
                    взаємовідносинах з бізнес-партнерами, зареєструємо
                    підприємство в найкоротший термін.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Реєстрація підприємства</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="/">
              <Thumb>
                <StyledImg src={Service5Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Логотип - це обличчя вашої компанії, в яке ви вкладаєте
                    чималі кошти для його реклами та просування. У майбутньому
                    такі інвестиції призводять до економічної вигоди.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Реєстрація торгової марки</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="/">
              <Thumb>
                <StyledImg src={Service3Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Штрих-код - це найбільш відома технологія ідентифікації. На
                    сьогодні штрих-коди EAN/UPC є основою всесвітньої системи,
                    робота якої забезпечується двома найбільшими
                    спеціалізованими міжнародними організаціями.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Реєстрація штрих-кодів</ServiceTitle>
            </Link>
          </ServiceListItem>
        </FullServiceList>
      </Container>
    </SectionsContainer>
  );
};

export default ServicesPage;
