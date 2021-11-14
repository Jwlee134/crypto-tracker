import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";

import { ReactQueryDevtools } from "react-query/devtools";
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
  return (
    <>
      <GlobalStyles />
      <Router />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
