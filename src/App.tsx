import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router isDark={isDark} toggleDark={toggleDark} />
      <ReactQueryDevtools initialIsOpen />
    </ThemeProvider>
  );
}

export default App;
