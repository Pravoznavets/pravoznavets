import Container from "components/Container";
import Article from "components/Article";
import PlaceHolder from "assets/images/ArticlesPage/bussines_960_720_1x.jpg";
import AlcoholLicenseImg from "assets/images/ArticlesPage/alcohol-license.jpg";
import AutoImg from "assets/images/ArticlesPage/auto.jpg";
import BrandImg from "assets/images/ArticlesPage/brand.jpg";
import CivilProtectionImg from "assets/images/ArticlesPage/civil-protection.jpg";
import CopyRightImg from "assets/images/ArticlesPage/copyright-trademark.jpg";
import EmployeeCertificationImg from "assets/images/ArticlesPage/employee-certification.jpg";
import EmployeeDismissalImg from "assets/images/ArticlesPage/employee-dismissal.jpg";
import HandsImg from "assets/images/ArticlesPage/hands.jpg";
import MedicalProductPriceImg from "assets/images/ArticlesPage/medical-product-price.jpg";
import MedicalProductProductionImg from "assets/images/ArticlesPage/medicla-product-production.jpg";
import PreinvestigationImg from "assets/images/ArticlesPage/preinvestigation.jpg";
import PrinciplesLawRegulationImg from "assets/images/ArticlesPage/principles-of-law-regulation.jpg";
import RawTaxesImg from "assets/images/ArticlesPage/raw-taxes.jpg";
import ReturnMoneyImg from "assets/images/ArticlesPage/return-money.jpg";
import TestamentImg from "assets/images/ArticlesPage/testament.jpg";
import TradeMarkImg from "assets/images/ArticlesPage/trademark.jpg";
import ElectronicPrescriptionImg from "assets/images/ArticlesPage/e-recipe.jpg";
import { ArticleItem, ArticlesList } from "./ArticlesPage.styled";

const ArticlesPage = () => {
  return (
    <Container>
      <ArticlesList>
        <ArticleItem>
          <Article
            title="Правила виписування та реквізити електронного рецепту"
            description="У цій статті йдеться про правила виписування та 
            реквізити електронних рецептів в Україні. Згідно з наказом 
            Міністерства охорони здоров'я, електронні рецепти замінюють 
            паперові рецепти і мають низку переваг, таких як швидке оброблення 
            та зменшення кількості помилок."
            image={ElectronicPrescriptionImg}
            link="electronic-prescroption"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Дії служби управління персоналу при звільненні працівника"
            description="У цій статті йдеться про основні дії, які має виконати 
            служба управління персоналу при звільненні працівника. Стаття також 
            наголошує на важливості дотримання законодавчих норм та внутрішніх 
            процедур при звільненні працівника."
            image={EmployeeDismissalImg}
            link="employee-dismissal"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Технічний контроль автотранспорту підприємства"
            description="У цій статті йдеться про необхідність проходження обов'язкового 
            технічного контролю для службового автотранспорту підприємства. Аналізуються 
            українські закони та постанови, що регулюють це питання."
            image={AutoImg}
            link="enterprise-auto-transport"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Обов’язки особи відповідальної за цивільний захист на підприємстві"
            description="У цій статті йдеться про обов’язки особи, відповідальної 
            за цивільний захист на підприємстві. Ця особа має забезпечити безпеку 
            працівників, майна та території підприємства у випадку надзвичайних ситуацій."
            image={CivilProtectionImg}
            link="enterprise-civil-protection"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Порядок організації процедури ознайомлення працівників із документами"
            description="У цій статті йдеться про порядок ознайомлення працівників з кадровими 
            документами за допомогою електронного зв'язку. Згідно з українським законодавством, 
            роботодавець може ознайомлювати працівників з наказами та іншими документами в 
            електронному вигляді, якщо це передбачено трудовим договором."
            image={PlaceHolder}
            link="familiarizing-employees-with-documents"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Відповідальність за виробництво лікарських засобів"
            description="Стаття детально розглядає юридичні наслідки виробництва 
            лікарських засобів в Україні, зокрема відповідальність виробників за 
            відповідність їх продукції реєстраційним матеріалам та потенційні 
            штрафи за порушення законодавства."
            image={MedicalProductProductionImg}
            link="medical-product-production"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Формування ціни на лікарські засоби виробником"
            description="У цій статті йдеться про обмеження на вільне формування 
            цін виробниками лікарських засобів в Україні, які підлягають державному 
            регулюванню."
            image={MedicalProductPriceImg}
            link="price-formation"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Оподаткування операцій з переробки давальницької сировини"
            description="У цій статті йдеться про оподаткування операцій з 
            переробки давальницької сировини в Україні. Стаття детально розглядає 
            податкові наслідки таких операцій, зокрема щодо податку на прибуток 
            та податку на додану вартість (ПДВ)."
            image={RawTaxesImg}
            link="taxation-of-operations"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Реєстрація авторських прав та патент на назву фірми"
            description="Для виділення товару використовують певні позначення або їх
                комбінацію. Така позначення або їх комбінація називається
                торговельною маркою. Торговельна марка застосовується при
                виділенні товару чи послуг, які або виготовляються, або
                надаються одним суб'єктом господарської діяльності для іншого.
                Для отримання торговельної марки зазвичай використовують цифри,
                літери, слова, різні логотипи та малюнки."
            image={CopyRightImg}
            link="company-name-patent"
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
            image={TradeMarkImg}
            link="trademark"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Правове регулювання атестації працівників"
            description="Стаття підготовлена на основі аналізу трудового законодавства 
            України та доктринальних теорій. У ній висвітлюються поняття атестації 
            працівників, принципи правового регулювання, критерії відмежування атестації 
            працівників від схожих правових явищ, а також наводиться перелік 
            нормативно-правових актів, які врегульовують відносини з питань атестації 
            працівників."
            image={EmployeeCertificationImg}
            link="employee-certification"
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
            image={ReturnMoneyImg}
            link="return-money"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Принципи правового регулювання атестації як принципи правового регулювання праці"
            description=" У статті проаналізовано та роз’яснено зміст основних принципів правового регулювання 
            атестації працівників, викладено особливості їх співвідношення з принципами правового регулювання праці. "
            image={PrinciplesLawRegulationImg}
            link="polrocapolrol"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Досудове розслідування"
            description="Стаття підготовлена на основі кримінально-процесуального законодавства України.
            У ній висвітлюються загальні положення досудового слідства та дізнання. Для студентів, аспірантів і викладачів вищих навчальних закладів."
            image={PreinvestigationImg}
            link="pre-trial-investigation"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="До питання правової природи заповіту"
            description="Стаття підготовлена на основі цивільного законодавства, зокрема Цивільного кодексу України та доктрини. 
            У ній висвітлено загальні положення про майно. Значна увага приділяється поняттю спадщини як об`єкту заповіту та особливостям спадкового правонаступництва."
            image={TestamentImg}
            link="covenant"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Співвідношення договору поставки та договору купівлі-продажу"
            description="Стаття підготовлена на основі цивільного та господарського законодавства України. 
            У ній висвітлюються загальні положення договору поставки та договору купівлі-продажу. 
            Значна увага приділяється визначенню критеріїв розмежування цих договорів."
            image={HandsImg}
            link="purchase-sale-agreement"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Реєстрація авторського права та державна реєстрація товарного знака"
            description="Сьогодні реєстрація авторських прав українців є тривалим процесом 
            для отримання охоронного документа, тобто свідоцтва про реєстрацію права на власний твір, 
            за допомогою державної реєстрації в головному Держдепартаменті України."
            image={BrandImg}
            link="copyright-registration"
          />
        </ArticleItem>
        <ArticleItem>
          <Article
            title="Ліцензія на алкоголь"
            description="Ліцензування алкогольної діяльності лежить у компетенції Державної фіскальної 
            служби України. Для отримання ліцензії на алкоголь суб'єкт господарювання повинен надати 
            комплект документів."
            image={AlcoholLicenseImg}
            link="license-for-alcohol"
          />
        </ArticleItem>
      </ArticlesList>
    </Container>
  );
};

export default ArticlesPage;
