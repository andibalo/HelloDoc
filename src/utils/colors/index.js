const mainColors = {
  green1: "#0BCAD4",
  green2: "#EDFCFD",
  dark1: "#112340",
  dark2: "#495A75",
  grey1: "#7D8797",
  grey2: "#E9E9E9",
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: "white",
  black: "black",
  border: {
    primary: mainColors.grey2,
  },
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    tabInactive: mainColors.dark2,
    tabActive: mainColors.green1,
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