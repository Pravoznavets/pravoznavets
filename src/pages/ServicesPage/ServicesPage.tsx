import Container from "components/Container";
import { FC } from "react";
import { Link } from "react-router-dom";
import Service1Img from "assets/images/ServicesPage/service1.jpg";
import Service2Img from "assets/images/ServicesPage/service2.jpg";
import Service3Img from "assets/images/ServicesPage/service3.jpg";
import Service4Img from "assets/images/ServicesPage/service4.jpg";
import Service5Img from "assets/images/ServicesPage/service5.jpg";
import Service6Img from "assets/images/ServicesPage/service6.jpg";
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
            <Link to="contract-law">
              <Thumb>
                <StyledImg src={Service1Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Ми пропонуємо професійні послуги з підготовки, аналізу та
                    супроводу договорів для фізичних осіб та бізнесу. Наші
                    спеціалісти допоможуть розробити договір будь-якої
                    складності або ретельно проаналізують вже існуючі угоди,
                    визначивши можливі ризики та надавши рекомендації щодо їх
                    мінімізації. Ми працюємо для того, щоб максимально захистити
                    Ваші інтереси та забезпечити надійність і прозорість
                    договірних відносин.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Договірне право</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="judicial-practice">
              <Thumb>
                <StyledImg src={Service7Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Один із ключових напрямків нашої діяльності – це професійне
                    представництво у судах. Ми забезпечимо надійний захист прав
                    та інтересів як фізичних, так і юридичних осіб у судах всіх
                    інстанцій. Наш досвід та компетенція дозволяють ефективно
                    відстоювати Ваші позиції, гарантуючи справедливе вирішення
                    спорів на кожному етапі судового процесу.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Судова практика</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="licenses-and-permits">
              <Thumb>
                <StyledImg src={Service8Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Ліцензія є офіційним підтвердженням того, що суб'єкт
                    господарювання, будь то юридична чи фізична особа,
                    відповідає вимогам законодавства для здійснення певного виду
                    діяльності. Ми допоможемо вам отримати необхідні ліцензії та
                    дозволи, забезпечуючи дотримання всіх юридичних норм та
                    спрощуючи процес взаємодії з регуляторними органами.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Ліцензії та дозволи</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="intellectual-property">
              <Thumb>
                <StyledImg src={Service4Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Захист прав інтелектуальної власності є ключовим елементом
                    успіху кожної компанії та фізичної особи. Ваш бренд, імідж
                    та унікальний стиль відрізняють вас від інших, і їхнє
                    несанкціоноване використання тягне за собою
                    відповідальність. Водночас, надання дозволу на використання
                    інтелектуальної власності приносить власнику прибуток, що є
                    важливим аспектом успішної господарської діяльності. Ми
                    допоможемо вам захистити ваші права та перетворити
                    інтелектуальну власність на цінний актив для вашого бізнесу.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Інтелектуальна власність</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="corporate-law">
              <Thumb>
                <StyledImg src={Service5Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Ми надаємо повний спектр юридичних послуг у сфері
                    корпоративного права, починаючи з підготовки та реєстрації
                    установчих документів, статутів, корпоративних договорів і
                    внутрішніх положень. Наші фахівці забезпечують комплексний
                    юридичний супровід суб'єктів господарювання на всіх етапах
                    їх діяльності — від реєстрації та внесення змін до
                    припинення діяльності. Ми гарантуємо професійний підхід для
                    захисту ваших корпоративних інтересів та ефективне вирішення
                    юридичних питань.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Корпоративне право</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="consultations">
              <Thumb>
                <StyledImg src={Service6Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Ми прагнемо надати вам якісні та надійні юридичні
                    консультації, допомагаючи знайти найкращі рішення для ваших
                    питань. Ваш захист і успіх у правових справах – наш головний
                    пріоритет. Ми докладаємо максимум зусиль, щоб забезпечити
                    вас професійною підтримкою та юридичною порадою, що гарантує
                    впевненість у кожному кроці.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Консультації</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="housing-issues">
              <Thumb>
                <StyledImg src={Service2Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Ми пропонуємо професійну юридичну допомогу у вирішенні
                    питань, пов'язаних з купівлею, продажем та орендою житла.
                    Наші фахівці також допоможуть вам у спорах із
                    житлово-комунальними службами, у питаннях спадщини та
                    розподілу житлової нерухомості, а також при поділі майна між
                    подружжям. Ми забезпечимо надійну правову підтримку для
                    захисту ваших інтересів у житлових питаннях.
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Житлові питання</ServiceTitle>
            </Link>
          </ServiceListItem>
          <ServiceListItem>
            <Link to="other">
              <Thumb>
                <StyledImg src={Service3Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Реєстрації касового апарату
                    <br /> Кадрові питання
                    <br /> Питання захисту прав споживачів
                    <br /> Питання готельно-ресторанного господарства
                    <br /> Супроводження на перевірках з усіма органами
                    державної влади
                  </ServiceHiddenText>
                </ServiceDescription>
              </Thumb>
              <ServiceTitle>Інші юридичні послуги</ServiceTitle>
            </Link>
          </ServiceListItem>
        </FullServiceList>
      </Container>
    </SectionsContainer>
  );
};

export default ServicesPage;
