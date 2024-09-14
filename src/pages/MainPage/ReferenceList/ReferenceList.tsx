import Container from "components/Container";
import {
  ReferenceListItem,
  ReferenceListLogo,
  ReferenceListSection,
  ReferenceListThumb,
  References,
  RefrenceListTitle,
} from "./ReferenceList.styled";
import BeefImg from "assets/images/MainPage/refences/beef.jpg";
import GWImg from "assets/images/MainPage/refences/GreenWhale.png";
import GYImg from "assets/images/MainPage/refences/greenyard.jpg";
import ITVImg from "assets/images/MainPage/refences/itv.jpg";
import KabanchiImg from "assets/images/MainPage/refences/kabanchik.jpg";
import AIImg from "assets/images/MainPage/refences/AromaInter.jpg";
import RevocandaImg from "assets/images/MainPage/refences/revocanda.jpg";
import SCImg from "assets/images/MainPage/refences/SilverCaCa.jpg";
import PDImg from "assets/images/MainPage/refences/PivnaDumajpg.jpg";

const ReferenceList = () => {
  return (
    <Container>
      <ReferenceListSection>
        <RefrenceListTitle>
          Відомі зареєстровані мною торговельні марки:
        </RefrenceListTitle>
        <ReferenceListThumb>
          <References>
            <ReferenceListItem>
              <ReferenceListLogo
                src={SCImg}
                alt="Логотип компанії срібна цаца"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={BeefImg}
                alt="Логотип компанії срібна цаца"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={GWImg}
                alt="Логотип компанії срібна цаца"
                width="160px"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={GYImg}
                alt="Логотип компанії срібна цаца"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={ITVImg}
                alt="Логотип компанії срібна цаца"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={KabanchiImg}
                alt="Логотип компанії срібна цаца"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={AIImg}
                alt="Логотип компанії срібна цаца"
                width="100%"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={RevocandaImg}
                alt="Логотип компанії срібна цаца"
                width="100%"
              />
            </ReferenceListItem>
            <ReferenceListItem>
              <ReferenceListLogo
                src={PDImg}
                alt="Логотип компанії срібна цаца"
                width="100%"
              />
            </ReferenceListItem>
          </References>
        </ReferenceListThumb>
      </ReferenceListSection>
    </Container>
  );
};

export default ReferenceList;
