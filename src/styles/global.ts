import { createGlobalStyle, css } from "styled-components";

import RobotoRegular from "@fontsource/roboto/400.css";
import RobotoBold from "@fontsource/roboto/700.css";

const Fonts = css`
  ${RobotoRegular}
  ${RobotoBold}
`;

export default createGlobalStyle`
  ${Fonts};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    font-size: 62.5%;
  }

  body {
    background-color: #121212;
    color: #f5f5f5;
  }
`;