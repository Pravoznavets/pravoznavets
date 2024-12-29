import "modern-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  font-family: -apple-system, BlinkMacSystemFont, "Open Sans", "Roboto",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
    color: ${({ theme }) => theme.color.primaryTextColor};
    user-select: none;
    scroll-behavior: smooth;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

input,
textarea {
  outline: transparent;
}
`;

export default GlobalStyle;
