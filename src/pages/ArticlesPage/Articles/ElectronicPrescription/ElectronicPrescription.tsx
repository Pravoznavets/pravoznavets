import Container from "components/Container";
import {
  ArticleList,
  ArticleNumberedItem,
  ArticleParagraphTitle,
  ArticlePointTitle,
  ArticleText,
  ArticleTitle,
} from "../Articles.styled";

const ElectronicPrescription = () => {
  return (
    <Container>
      <ArticleTitle>
        Правила виписування та реквізити електронного рецепту
      </ArticleTitle>
      <ArticleText>
        Відповідно до п.5 Розділу І ПРАВИЛ виписування рецептів на лікарські
        засоби і вироби медичного призначення, затверджених наказом МІНІСТЕРСТВА
        ОХОРОНИ ЗДОРОВ'Я УКРАЇНИ від 19.07.2005 № 360 Електронний рецепт
        створюється, зберігається та передається через інформаційну
        (інформаційно-телекомунікаційну) систему, доступ до якої надається
        уповноваженим особам суб’єкта господарювання, що здійснюють виписування
        електронного рецепта, та уповноваженим особам суб’єкта господарювання,
        що здійснюють відпуск лікарського засобу за електронним рецептом
        відповідно до вимог чинного законодавства у сфері електронного
        документообігу, електронного цифрового підпису та захисту інформації в
        інформаційно-телекомунікаційних системах.
      </ArticleText>
      <ArticleText>
        Електронний рецепт виписується уповноваженою на те в інформаційній
        (інформаційно-телекомунікаційній) системі суб'єкта господарювання особою
        шляхом накладення кваліфікованого електронного підпису (далі по тексту -
        КЕП) медичного працівника відповідно до законодавства про електронний
        документообіг та електронні довірчі послуги.
      </ArticleText>
      <ArticleText>
        Інформаційно-телекомунікаційна система, в якій створюється, зберігається
        та передається електронний рецепт, повинна мати комплексну систему
        захисту інформації з підтвердженою відповідністю.
      </ArticleText>
      <ArticleText>
        Для виписування електронного рецепта суб’єкт господарювання вносить до
        бази даних інформаційної (інформаційно-телекомунікаційної) системи
        інформацію про лікаря та пацієнта, яка відповідає інформації, що
        зазначається на рецептурних бланках форм № 1 (ф-1) для виписування
        лікарських засобів і виробів медичного призначення, що відпускаються за
        повну вартість, безоплатно або з доплатою та № 3 (ф-3) для виписування
        наркотичних та психотропних лікарських засобів.
      </ArticleText>
      <ArticleParagraphTitle>Висновок:</ArticleParagraphTitle>
      <ArticleText>Враховуючи вище викладене, </ArticleText>
      <ArticlePointTitle>
        Реквізитами електронного рецепту по Формі 1 є:
      </ArticlePointTitle>
      <ArticleList>
        <ArticleNumberedItem>
          1. Прізвище, ініціали та вік хворого;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          2. Номер карти амбулаторного чи стаціонарного хворого;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          3. Назва та кількість виписаних лікарських засобів (Міжнародна
          непатентована назва ліків; дозування; лікарська форма; кількість доз;
          спосіб вживання ліків);
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          4. Номер рецепту та дата його видачі;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          5. Найменування закладу охорони здоров’я або ПІП ФОП;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          6. Адреса закладу охорони здоров’я або ФОП;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          7. Код ЄДРПОУ/ Реєстраційний номер облікової картки платника податків;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          8. Реквізити ліцензії на медичну практику або рішення органу
          ліцензування;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          9. Джерело фінансування, а також інформацію щодо погашення вартості
          ліків: за повну вартість, безоплатно, з доплатою;
        </ArticleNumberedItem>
        <ArticleNumberedItem>10. Термін дії рецепту;</ArticleNumberedItem>
        <ArticleNumberedItem>
          11. Прізвище та ініціали лікаря, КЕП лікаря;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          12. № лікарської форми індивідуального виготовлення (за необхідності).
        </ArticleNumberedItem>
      </ArticleList>
      <ArticlePointTitle>
        Реквізитами електронного рецепту по Формі 3 є:
      </ArticlePointTitle>
      <ArticleList>
        <ArticleNumberedItem>1. Серія, № та дата;</ArticleNumberedItem>
        <ArticleNumberedItem>
          2. Прізвище, ініціали та вік хворого;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          3. Номер карти амбулаторного чи стаціонарного хворого;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          4. Найменування закладу охорони здоров’я або ПІП ФОП;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          5. Адреса закладу охорони здоров’я або ФОП;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          6. Код ЄДРПОУ/ Реєстраційний номер облікової картки платника податків;
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          7. Реквізити ліцензії на медичну практику або рішення органу
          ліцензування.
        </ArticleNumberedItem>
        <ArticleNumberedItem>
          8. Прізвище та ініціали лікаря, КЕП лікаря.
        </ArticleNumberedItem>
      </ArticleList>
    </Container>
  );
};

export default ElectronicPrescription;
