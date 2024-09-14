import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader";

const MainPage = lazy(() => import("pages/MainPage"));
const ArticlesPage = lazy(() => import("pages/ArticlesPage"));
const ServicesPage = lazy(() => import("pages/ServicesPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const ConsultationsService = lazy(
  () => import("pages/ServicesPage/Services/ConsultationsService")
);
const ContractLawService = lazy(
  () => import("pages/ServicesPage/Services/ContractLawService")
);
const CorporateLawService = lazy(
  () => import("pages/ServicesPage/Services/CorporateLawService")
);
const HousingIssuesService = lazy(
  () => import("pages/ServicesPage/Services/HousingIssuesService")
);
const IntellectualPropertyService = lazy(
  () => import("pages/ServicesPage/Services/IntellectualPropertyService")
);
const JudicialPracticeService = lazy(
  () => import("pages/ServicesPage/Services/JudicialPracticeService")
);
const LicensesAndPermitsService = lazy(
  () => import("pages/ServicesPage/Services/LicensesAndPermitsService")
);
const OtherLegalService = lazy(
  () => import("pages/ServicesPage/Services/OtherLegalService")
);
const EmployeeCertification = lazy(
  () => import("pages/ArticlesPage/Articles/EmployeeCertification")
);
const Covenant = lazy(() => import("pages/ArticlesPage/Articles/Covenant"));
const Polrocaprolrol = lazy(
  () => import("pages/ArticlesPage/Articles/Polrocapolrol")
);
const PreTrialInvestigation = lazy(
  () => import("pages/ArticlesPage/Articles/PreTrialInvestigation")
);
const PurchaseSaleAgreement = lazy(
  () => import("pages/ArticlesPage/Articles/PurchaseSaleAgreement")
);
const ReturnMoney = lazy(
  () => import("pages/ArticlesPage/Articles/ReturnMoney")
);
const TradeMark = lazy(() => import("pages/ArticlesPage/Articles/TradeMark"));
const CompanyNamePatent = lazy(
  () => import("pages/ArticlesPage/Articles/CompanyNamePatent")
);
const CopyrightRegistration = lazy(
  () => import("pages/ArticlesPage/Articles/CopyrightRegistration")
);
const LicenseForAlcohol = lazy(
  () => import("pages/ArticlesPage/Articles/LicenseForAlcohol")
);
const EmployeeDismissal = lazy(
  () => import("pages/ArticlesPage/Articles/EmployeeDismissal")
);
const ElectronicPrescription = lazy(
  () => import("pages/ArticlesPage/Articles/ElectronicPrescription")
);
const EnterpriseAutoTransport = lazy(
  () => import("pages/ArticlesPage/Articles/EnterpriseAutoTransport")
);
const EnterpriseCivilProtection = lazy(
  () => import("pages/ArticlesPage/Articles/EnterpriseCivilProtection")
);
const FamiliarizingEmployeesWithDocuments = lazy(
  () =>
    import("pages/ArticlesPage/Articles/FamiliarizingEmployeesWithDocuments")
);
const MedicalProductProduction = lazy(
  () => import("pages/ArticlesPage/Articles/MedicalProductProduction")
);
const PricesFormation = lazy(
  () => import("pages/ArticlesPage/Articles/PricesFormation")
);
const TaxationOfOpertaions = lazy(
  () => import("pages/ArticlesPage/Articles/TaxationOfOpertaions")
);

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route>
          <Route
            path="services/consultations"
            element={<ConsultationsService />}
          />
          <Route
            path="services/contract-law"
            element={<ContractLawService />}
          />
          <Route
            path="services/corporate-law"
            element={<CorporateLawService />}
          />
          <Route
            path="services/housing-issues"
            element={<HousingIssuesService />}
          />
          <Route
            path="services/intellectual-property"
            element={<IntellectualPropertyService />}
          />
          <Route
            path="services/judicial-practice"
            element={<JudicialPracticeService />}
          />
          <Route
            path="services/licenses-and-permits"
            element={<LicensesAndPermitsService />}
          />
          <Route path="services/other" element={<OtherLegalService />} />
        </Route>
        <Route path="articles" element={<ArticlesPage />} />
        <Route>
          <Route
            path="articles/employee-certification"
            element={<EmployeeCertification />}
          />
          <Route path="articles/covenant" element={<Covenant />} />
          <Route path="articles/polrocapolrol" element={<Polrocaprolrol />} />
          <Route
            path="articles/pre-trial-investigation"
            element={<PreTrialInvestigation />}
          />
          <Route
            path="articles/purchase-sale-agreement"
            element={<PurchaseSaleAgreement />}
          />
          <Route path="articles/return-money" element={<ReturnMoney />} />
          <Route path="articles/trademark" element={<TradeMark />} />
          <Route
            path="articles/copyright-registration"
            element={<CopyrightRegistration />}
          />
          <Route
            path="articles/company-name-patent"
            element={<CompanyNamePatent />}
          />
          <Route
            path="articles/license-for-alcohol"
            element={<LicenseForAlcohol />}
          />
          <Route
            path="articles/electronic-prescroption"
            element={<ElectronicPrescription />}
          />
          <Route
            path="articles/employee-dismissal"
            element={<EmployeeDismissal />}
          />
          <Route
            path="articles/enterprise-auto-transport"
            element={<EnterpriseAutoTransport />}
          />
          <Route
            path="articles/familiarizing-employees-with-documents"
            element={<FamiliarizingEmployeesWithDocuments />}
          />
          <Route
            path="articles/enterprise-civil-protection"
            element={<EnterpriseCivilProtection />}
          />
          <Route
            path="articles/medical-product-production"
            element={<MedicalProductProduction />}
          />
          <Route
            path="articles/price-formation"
            element={<PricesFormation />}
          />
          <Route
            path="articles/taxation-of-operations"
            element={<TaxationOfOpertaions />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
