import Container from "components/Container";
import { FC } from "react";
import {
  ServiceContainer,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const IntellectualPropertyService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Інтелектуальна власність</ServiceTitle>
        <ServiceText>
          Захист прав інтелектуальної власності – це невід'ємна частина успіху
          та унікальності кожного бренду, компанії або фізичної особи. Ваш
          імідж, стиль та творчі надбання вирізняють вас серед інших, і їхнє
          несанкціоноване використання може призвести до відповідальності. У той
          же час, надання дозволу на використання інтелектуальних прав здатне
          принести суттєвий прибуток, що є важливою складовою успішного бізнесу.
        </ServiceText>
        <ServiceText>
          Ми – експерти у сфері захисту прав інтелектуальної власності і готові
          надати допомогу щодо таких об'єктів, як: комерційні найменування,
          торговельні марки, літературні та художні твори, наукові відкриття,
          винаходи, корисні моделі, а також промислові зразки.
        </ServiceText>
        <ServiceText>
          Наші фахівці складуть і проаналізують договори будь-якої складності у
          сфері інтелектуального права, включаючи договори на продаж авторських
          прав та торговельних марок. Ми захистимо ваші авторські та суміжні
          права у спорах будь-якої складності.
        </ServiceText>
        <ServiceText>
          Окрім цього, ми забезпечимо вас можливістю зареєструвати штрих-код для
          ефективної організації облікових операцій при поставках і продажу
          товарів. Штрих-код — це універсальний спосіб передачі інформації, що
          забезпечує швидкий доступ до даних за допомогою спеціальних сканерів,
          що значно полегшує облік та продаж продукції.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default IntellectualPropertyService;
