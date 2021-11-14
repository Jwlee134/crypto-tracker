import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";

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
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
