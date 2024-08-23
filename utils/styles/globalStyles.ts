import { createGlobalStyle, css } from "styled-components";

import resetCSS from "./reset";
import { darkColors, lightColors } from "./theme";
import { mediaDesktop, mediaTablet } from "./responsive";

const style = css`
  :root {
    color-scheme: light;
    ${Object.entries(lightColors).map(([key, value]) => `--${key}: ${value};`)}
  }

  :root[data-theme="dark"] {
    color-scheme: dark;
    ${Object.entries(darkColors).map(([key, value]) => `--${key}: ${value};`)}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    user-select: text;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textInverted};
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textInverted};
    text-shadow: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 1px;

    ${mediaTablet(css`
      font-size: 1.3px;
    `)};

    ${mediaDesktop(css`
      font-size: 1.6px;
    `)};
  }

  body {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 20rem;
  }

  button,
  input,
  textarea,
  select,
  dialog {
    -webkit-appearance: none;
    background: none;
    font-family: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    outline: none;
    border-radius: 0;
  }

  svg {
    outline: none;
    display: block;
  }

  button,
  div,
  a,
  span {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default createGlobalStyle`
  ${resetCSS}
  ${style}
`;
