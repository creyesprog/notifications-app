import {
  ComponentsOverrides,
  Theme,
} from "@mui/material";

export const defaultAppBarStyles: ComponentsOverrides<Theme>["MuiAppBar"] = {
  root: {
    backgroundColor: "orange",
  },
};

export const defaultAppBar = {
  styleOverrides: defaultAppBarStyles,
};
