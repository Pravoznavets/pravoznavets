import Container from "components/Container";
import React, { FC } from "react";
import {
  ArticleContainer,
  ArticleList,
  ArticleListItem,
  ArticleParagraphTitle,
  ArticlePointTitle,
  ArticleText,
  ArticleTitle,
} from "../Articles.styled";

const LicenseForAlcohol: FC = () => {
  return (
    <Container>
      <ArticleContainer>
        <ArticleTitle>Ліцензія на алкоголь</ArticleTitle>
        <ArticleParagraphTitle>Ліцензія на пиво</ArticleParagraphTitle>
        <ArticleText>
          В загальному переліку вироблених напоїв значний сегмент відводиться
          алкогольній продукції, виробленій на основі харчових спиртів. У цьому
          списку горілка, коньяк, бренді, вермут, лікери, вина, шампанське та
          інші напої з вмістом алкоголю понад 9%. Діяльність всіх суб'єктів
          господарювання, пов'язана з виробництвом і реалізацією - оптовою та
          роздрібною, алкогольних напоїв підлягає обов'язковому ліцензуванню. Це
          регламентовано Законом України №481/95-ВР від 19 грудня 1995 року.
        </ArticleText>
        <ArticleText>
          Алкогольні напої належать до групи товарів, що обкладаються акцизним
          податком, і з обов'язковим застосуванням касового апарату в кожній
          роздрібній торговій точці. Законодавством передбачено, що видача
          ліцензії на алкоголь здійснюється для кожного зареєстрованого касового
          апарату. Вартість ліцензії на алкоголь для виробників становить
          символічну суму 780 гривень, але для здійснення імпортно-експортних
          операцій, оптової торгівлі вартість документа становить 500 тисяч
          гривень.
        </ArticleText>
        <ArticleText>
          При роздрібному продажу кінцевому споживачу у міських населених
          пунктах необхідно сплатити 8000 гривень на рік (з можливістю
          квартальної оплати рівними частинами) і 500 гривень у сільських та
          селищних роздрібних точках.
        </ArticleText>
        <ArticleParagraphTitle>
          Документи для отримання ліцензії:
        </ArticleParagraphTitle>
        <ArticleList>
          <ArticleText>
            Ліцензування алкогольної діяльності лежить у компетенції Державної
            фіскальної служби України. Для отримання ліцензії на алкоголь
            суб'єкт господарювання повинен надати комплект документів:
          </ArticleText>
          <ArticleListItem>Виписку або витяг з ЄДРПОУ;</ArticleListItem>
          <ArticleListItem>
            Договір оренди або правовстановлюючі документи (свідоцтво про право
            власності) на приміщення, призначене для реалізації алкогольної
            продукції;
          </ArticleListItem>
          <ArticleListItem>
            Довідку фіскальної служби про реєстрацію діючого касового апарату
            (кількість ліцензій обов'язково відповідає кількості РРО);
          </ArticleListItem>
          <ArticleListItem>
            Оригінал квитанції або платіжного доручення про внесення плати за
            ліцензію.
          </ArticleListItem>
        </ArticleList>
        <ArticleText>
          Якщо подача документів і отримання ліцензії здійснюється уповноваженою
          особою, обов'язкова наявність довіреності. <br />
          Зміни 2015 року
        </ArticleText>
        <ArticleText>
          Зміни до Податкового кодексу, що набули чинності з 1 липня 2015 року,
          внесли значні корективи на ринок алкогольної продукції. Основною
          зміною стало визначення пива як алкогольного напою. Відповідно, всі
          підприємці та юридичні особи, які здійснювали продаж тільки цього
          алкогольного продукту, повинні придбати ліцензію на пиво за загальною
          визначеною вартістю. Винятком є тільки сорти пива, що не містять
          алкоголь – так зване «безалкогольне пиво».
        </ArticleText>
        <ArticleText>
          Паралельно з обов'язковою ліцензією на пиво та наявністю касового
          апарату для продажу, для реалізації напою введено додаткову вимогу до
          торгових точок: площа торгового закладу, де продається пиво або інші
          алкогольні напої, не повинна бути меншою за 20 квадратних метрів.
        </ArticleText>
        <ArticlePointTitle>Відповідальність</ArticlePointTitle>
        <ArticleText>
          Виробництво та реалізація алкогольної продукції без касового апарату і
          дозвільних документів (ліцензії на алкоголь) тягне за собою
          застосування штрафних санкцій з боку контролюючих органів. Розмір
          фінансового покарання з 4 вересня 2014 року визначений у наступних
          розмірах:
        </ArticleText>
        <ArticleList>
          <ArticleListItem>
            Неліцензовані виробники – 85 тисяч гривень;
          </ArticleListItem>
          <ArticleListItem>
            Продаж алкоголю оптом і в роздріб, зберігання у будівлях, що не
            входять до Єдиного реєстру місць зберігання такої продукції – 200% і
            100% від вартості партії напоїв, але не менше 17 тисяч гривень;
          </ArticleListItem>
          <ArticleListItem>
            Реалізація напоїв з використанням незареєстрованого касового апарату
            – у двократному розмірі вартості проданого товару, але не менше 10
            тисяч гривень;
          </ArticleListItem>
          <ArticleListItem>
            Продаж нижче встановленої державою ціни – від 10 тисяч гривень.
          </ArticleListItem>
        </ArticleList>
      </ArticleContainer>
    </Container>
  );
};

export default LicenseForAlcohol;
