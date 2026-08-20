import { css, createGlobalStyle } from 'styled-components';
import theme from '../config/theme';
import ChenYuluoyan from '../assets/fonts/ChenYuluoyan-Thin-Monospaced.ttf';

const style = css`
  :root {
    --primary-color: ${theme.primary};
    --secondary-color: ${theme.secondary};
    --bg-light-color: ${theme.bgLight};
    --surface-color: ${theme.surface};
    --text-color: ${theme.text};
    --muted-color: ${theme.muted};
    --border-color: ${theme.border};
    --accent-color: ${theme.accent};
    --navbar-height: 76px;
    --base-padding: 20px;
    --section-padding: 72px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --shadow-soft: 0 18px 45px rgba(0, 54, 91, 0.08);
    --shadow-hover: 0 24px 60px rgba(0, 54, 91, 0.13);

    font-family: 'Noto Sans TC', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    background: var(--primary-color);
    scroll-behavior: smooth;
  }

  body {
    background: var(--primary-color);
    color: var(--text-color);
    overflow-x: hidden;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  #root {
    background: #fff;
    min-height: 100dvh;
  }

  .wrapper {
    padding: var(--section-padding) 0;
  }

  .container {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 var(--base-padding);
  }

  img,
  video,
  iframe {
    max-width: 100%;
  }

  a {
    color: inherit;
  }

  ::selection {
    color: #fff;
    background: var(--primary-color);
  }

  /* 修正 Ant Design Row 的負邊距導致的溢出問題，並使其置中 */
  .ant-row {
    margin-inline: 0 !important;
  }

  @media (min-width: 576px) {
    :root {
      --base-padding: 32px;
      --section-padding: 96px;
    }
  }

  @media (min-width: 1200px) {
    :root {
      --section-padding: 112px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'hand-drawn';
    src: url(${ChenYuluoyan}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  ${style}
`;

export default GlobalStyle;
