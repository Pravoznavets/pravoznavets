type SelectDevice = (props: any) => string;

export const selectPhone: SelectDevice = ({ theme: { media } }) => media.mobile;
export const selectTablet: SelectDevice = ({ theme: { media } }) =>
  media.tablet;
export const selectDesktop: SelectDevice = ({ theme: { media } }) =>
  media.desktop;
