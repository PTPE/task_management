import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    purple: string;
    lightPurple: string;
    red: string;
    lightRed: string;
    text: string;
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
  }
}
