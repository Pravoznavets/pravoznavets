import GlobalStyle from "components/GlobalStyle";
import SharedLayout from "components/SharedLayout";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SharedLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
