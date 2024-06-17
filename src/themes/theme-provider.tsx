"use client";

import { createTheme } from "@mui/material";
import { colours } from "./colours/colours";
import { defaultButton } from "./app-bar";

export const theme = createTheme({
  palette: {
    primary: {
      main: colours.backgroundWhite,
    },
    text: {
      primary: "rgba(0,0,0,0.8)",
    }
  },
  components: {
    MuiButton: defaultButton,
  },
});
