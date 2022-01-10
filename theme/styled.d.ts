// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      primaryDarkGrey: string;
      secondaryMediumGrey: string;
      secondaryLightGrey: string;
    };

    mediaQ: {
      mobileS: string;
      mobileM: string; 
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
      customPrentation: string;
    }
  }
}