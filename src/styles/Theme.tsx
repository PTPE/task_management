const sharedTheme = {
  purple: "#625FC1",
  lightPurple: "#8A87D0",
  lightestPurple: "#EFEFFA",
};

const lightTheme = {
  text: "#000111",
  bgPrimary: "#ffffff",
  bgSecondary: "#F5F7FC",
  bgTertiary: "#EAEFF9",
  ...sharedTheme,
};

const darkTheme = {
  text: "#ffffff",
  bgPrimary: "#2b2c37",
  bgSecondart: "#20212c",
  bgTertiary: "#22232E",
  ...sharedTheme,
};

export const theme = { darkTheme, lightTheme };
