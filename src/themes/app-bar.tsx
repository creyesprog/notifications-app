import {
  ComponentsOverrides,
  Theme,
} from "@mui/material";

import { colours } from "./colours/colours";

export const defaultButtonStyles: ComponentsOverrides<Theme>["MuiButton"] = {
  root: {
    color: colours.fontColorGrey,
    textTransform: "none",
  },
};

export const defaultButton = {
  styleOverrides: defaultButtonStyles,
};
