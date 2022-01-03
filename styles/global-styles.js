import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
      html {
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
      }
      
      body {
        color: #000;
        font: 1.2em/1.3em "NanumSquare", sans-serif !important;
        overflow-x: hidden;
      }
      
      p,
      span,
      strong,
      a,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      b,
      dt,
      dd,
      li,
      label,
      button,
      abbr {
        transform: skew(-0.03deg);
      }
      
      legend,
      .hidden {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }
      
      caption {
        position: relative;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }
      
      a {
        color: #000;
        text-decoration: none;
      }
      
      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      
      .icon,
      i[class^="icon-"] {
        display: inline-block;
        span {
          position: absolute;
          clip: rect(0, 0, 0, 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
        }
      }
      
      button,
      .button {
        border: 0;
        border-color: transparent;
        background-color: transparent;
        cursor: pointer;
        font-family: "NanumSquare", sans-serif;
        padding: 0;
        &:focus {
          outline: 0;
        }
      }

      .container {
        max-width: 28rem;
        margin: 0 auto;
        background: #fff;
        box-shadow: -2px 9px 20px #f9f9f9;
      }
      
      .contents {
        height: calc(100vh - 50px);
        padding: 1rem 1.2rem;
      }
      
      .icon::after {
        content: "";
        display: inline-block;
      }

      .ant-modal {
        width: 28rem !important;
      }
`;
