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
          {/* <ServiceListItem>
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
          </ServiceListItem> */}
          <ServiceListItem>
            <Link to="contract-law">
              <Thumb>
                <StyledImg src={Service1Img} alt="" />
                <ServiceDescription>
                  <ServiceHiddenText>
                    Ми надаємо послуги з оцінки, розробки та супроводу укладення
                    договору як для фізичних осіб так і для бізнесу. Ми
                    підготуємо договір будь-якої складності або проаналізуємо
                    Ваш існуючий договір та складемо перелік пропозицій та/або
                    ризиків з метою захисту Ваших інтересів.
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
                    Одним із основних напрямків нашої діяльності є судове
                    представництво. Ми зможемо захистити права та відстояти
                    інтереси юридичних осіб та фізичних осіб у судах всіх
                    інстанцій.
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
                    Ліцензія підтверджує, що суб'єкт господарювання (юридична
                    або фізична особа) відповідає встановленим законодавством
                    вимогам для здійснення відповідної діяльності.
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
                    Стояти на варті захисту права інтелектуальної власності це
                    невід’ємна частина власного бренду кожної компанії, фізичної
                    особи, іміджу та стилю, який відрізняється від інших і за
                    несанкціоноване використання, якого настає відповідальність,
                    а за надання дозволу на використання – прибуток у власника,
                    що є невід’ємним атрибутом господарської діяльності та
                    показником успішного бізнесу та/або фізичної особи.
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
                    Ми надаємо юридичні послуги щодо підготовки та реєстрації
                    необхідних документів, статутів, корпоративних договорів,
                    погоджень, внутрішніх положень. Також ми забезпечуємо
                    комплексне юридичне супроводження суб’єктів господарювання,
                    починаючи від стадії їх створення (реєстрації), внесення
                    необхідних змін та припинення діяльності суб’єктів
                    господарювання, резидентів України.
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
                    Ми докладемо всіх зусиль, щоб забезпечити вас надійною
                    юридичною консультацією. Ваш захист та успіх у юридичних
                    питаннях - наша головна цінність та пріоритет!
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
                    Ми надаємо професійну юридичну допомогу в питаннях,
                    пов'язаних з продажем, купівлею, орендою житла, а також
                    вирішуємо спори з житловими та комунальними службами,
                    питання, повя`заних із вступом у спадщину і розподіл
                    житлової нерухомості, а також питання поділу нерухомого
                    майна подружжя.
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
