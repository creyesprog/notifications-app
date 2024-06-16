"use client";

import { createTheme } from "@mui/material";
import { colours } from "./colours/colours";

export const theme = createTheme({
  palette: {
    primary: {
      main: colours.backgroundWhite,
    },
    text: {
      primary: "rgba(0,0,0,0.8)",
    }
  },
  // components: {
  //   MuiAppBar: defaultAppBar,
  // },
});
