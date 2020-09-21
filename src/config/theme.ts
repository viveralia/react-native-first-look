import { DefaultTheme } from "react-native-paper";
import { Theme } from "react-native-paper/src/types";

import colors from "./colors";

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accent: colors.primary,
  },
};

export default theme;
