type Color =
  | "accentColor"
  | "accentBackground"
  | "primaryTextColor"
  | "secondaryTextColor"
  | "primaryBackgroundColor"
  | "secondaryBackgroundColor"
  | "warningColor";

type MediaRequest = "mobile" | "tablet" | "desktop";

type Theme = {
  color: Record<Color, string>;
  media: Record<MediaRequest, string>;
  fontSize: Record<MediaRequest, Record<string, string>>;
  transitionHover: string;
  boxShadow: string;
};

const color: Record<Color, string> = {
  accentColor: "rgba(203,171,97)",
  // accentColor: "rgba(33,150,243)",
  accentBackground: "rgba(203,171,97,.9)",
  // accentBackground: "rgba(33,150,243,.9)",
  primaryTextColor: "#212121",
  secondaryTextColor: "#757575",
  primaryBackgroundColor: "#2f303a",
  secondaryBackgroundColor: "#EAEDF1",
  warningColor: "#d28b8b",
};

const media: Record<MediaRequest, string> = {
  mobile: "(min-width: 360px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1280px)",
};

const fontSize: Record<MediaRequest, Record<string, string>> = {
  mobile: {
    primary: "16px",
    secondary: "18px",
    minimal: "14px",
    heroTitle: "36px",
    sectionTitle: "28px",
    contacts: "20px",
  },
  tablet: {},
  desktop: {
    primary: "14px",
    logo: "26px",
  },
};

const transitionHover = "250ms cubic-bezier(0.4, 0, 0.2, 1)";

const boxShadow =
  "0px 1px 1px rgba(0,0,0,.12), 0px 4px 4px rgba(0,0,0,.06), 1px 4px 6px rgba(0,0,0,.16)";

export const theme: Theme = {
  color,
  media,
  fontSize,
  transitionHover,
  boxShadow,
};
