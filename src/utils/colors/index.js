const mainColors = {
  green1: "#0BCAD4",
  green2: "#EDFCFD",
  dark1: "#112340",
  dark2: "#495A75",
  dark3: "#8092AF",
  grey1: "#7D8797",
  grey2: "#E9E9E9",
  grey3: "#EDEEF0",
  blue: "#0066CB",
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue,
  white: "white",
  black: "black",
  disable: mainColors.grey3,
  border: {
    primary: mainColors.grey2,
  },
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    tabInactive: mainColors.dark2,
    tabActive: mainColors.green1,
    subtitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: "white",
    },
    secondary: {
      background: "white",
      text: mainColors.dark1,
    },
  },
  cardLight: mainColors.green2,
};
