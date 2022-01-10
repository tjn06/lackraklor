// my-theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: '#b1274e',
    secondary: '#91d8df',
    primaryDarkGrey: '#151515',
    secondaryMediumGrey: '#878787',
    secondaryLightGrey: '#b1b1b1',
  },




  mediaQ: {
    mobileS: '(min-width: 320px)',
    mobileM: '(min-width: 375px)',
    mobileL: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desktop: '(min-width: 1920px)',
    desktopL: '(min-width: 2560px)',

    customPrentation: '(min-width: 2560px)'
  }

};

export default theme;