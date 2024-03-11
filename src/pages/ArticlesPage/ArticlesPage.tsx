import Container from "components/Container";
import PlaceHolder from "assets/images/bussines_1280_853-2x.jpg";
import Article from "components/Article";
import { ArticleItem } from "./ArticlesPage.styled";

const ArticlesPage = () => {
  return (
    <Container>
      <ul>
        <ArticleItem>
          <Article
            title="Реєстрація назви компанії"
            description="Для виділення товару використовують певні позначення або їх
                комбінацію. Така позначення або їх комбінація називається
                торговельною маркою. Торговельна марка застосовується при
                виділенні товару чи послуг, які або виготовляються, або
                надаються одним суб'єктом господарської діяльності для іншого.
                Для отримання торговельної марки зазвичай використовують цифри,
                літери, слова, різні логотипи та малюнки. Щоб отримати права
                власності на марку, її необхідно зареєструвати. Добре відома та
                рекламована марка товару називається брендом."
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Як правильно перевірити та зареєструвати торгову марку?"
            description={`Напис, малюнок, візерунок чи їх комбінація в
            міжнародному праві називаються торговою маркою, в українському законодавстві
            їх називають "знаком товару чи послуги". Торгова марка закріплюється за
            певним товаром після її офіційної реєстрації. Тільки власник законно
            зареєстрованого знаку може звертатися у разі необхідності за захистом свого
            права на використання конкретного зображення.`}
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Правове регулювання атестаціх працівників"
            description="Стаття підготовлена на основі аналізу трудового законодавства 
            України та доктринальних теорій. У ній висвітлюються поняття атестації 
            працівників, принципи правового регулювання, критерії відмежування атестації 
            працівників від схожих правових явищ, а також наводиться перелік 
            нормативно-правових актів, які врегульовують відносини з питань атестації 
            працівників."
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Співвідношення договору поставки та договору купівлі-продажу"
            description="Стаття підготовлена на основі цивільного та господарського 
            законодавства України. У ній висвітлюються загальні положення договору 
            поставки та договору купівлі-продажу. Значна увага приділяється визначенню 
            критеріїв розмежування цих договорів."
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Правова природа заповіту"
            description="Стаття підготовлена на основі цивільного законодавства, 
            зокрема Цивільного кодексу України та доктрини. У ній висвітлено загальні 
            положення про майно. Значна увага приділяється поняттю спадщини як об`єкту 
            заповіту та особливостям спадкового правонаступництва."
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Досудове розслідування"
            description="Стаття підготовлена на основі кримінально-процесуального 
            законодавства України. У ній висвітлюються загальні положення досудового 
            слідства та дізнання. Для студентів, аспірантів і викладачів вищих навчальних 
            закладів."
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Запатентувати торгову марку"
            description="Щоб патентувати торгову марку, яка представляє унікальне зображення та не містить 
            аборонених законом позначень, необхідно подати заявку в уповноважений орган. Після 
            перевірки особа, яка подавала заявку, отримає свідоцтво про право власності на 
            патентований знак. Таке свідоцтво є чинним протягом десяти років, якщо не виникнуть 
            обставини, через які його може бути зупинено чи анульовано. "
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Як повернути гроші в магазині за куплений товар"
            description="Від дорогої сумки на наступний день після покупки відвалився логотип. А 
            на фірмових джинсах відсутня пара заклепок. Але, в цілому, з твоїми покупками все в порядку, 
            і серйозної причини для звернення до організації захисту прав споживачів, здається, немає. Ти 
            йдеш в магазин із твердим наміром повернути свої придбання і отримати гроші. Продавець 
            пропонує тобі замінити покупки на такі ж, але без дефектів."
            image={PlaceHolder}
            link=""
          />
        </ArticleItem>
      </ul>
    </Container>
  );
};

export default ArticlesPage;