// TODO: Not actually used but serves as an example for
// component overrides
import {
  ComponentsOverrides,
  Theme,
} from "@mui/material";

import { colours } from "./colours/colours";

export const defaultAppBarStyles: ComponentsOverrides<Theme>["MuiAppBar"] = {
  root: {
    backgroundColor: colours.backgroundWhite,
    color: colours.fontColorGrey,
  },
};

export const defaultAppBar = {
  styleOverrides: defaultAppBarStyles,
};
