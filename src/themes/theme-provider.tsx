"use client";

import { createTheme } from "@mui/material";
import { defaultAppBar } from "./app-bar";

export const theme = createTheme({
  components: {
    MuiAppBar: defaultAppBar,
  },
});
