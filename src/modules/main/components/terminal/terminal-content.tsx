"use client";

import { Box, Typography } from "@mui/material";

import { TypeAnimation } from "react-type-animation";

import { colours } from "@/themes/colours/colours";

export function TerminalContent() {
  return (
    <Box
      id="terminal-content"
      sx={{
        flexGrow: 1,
        backgroundColor: colours.terminalBlack,
        padding: "15px 0 0 30px",
        fontSize: "5rem",
      }}
    >
      <Typography variant="body1" color="white">
        <TypeAnimation
          preRenderFirstString={true}
          style={{ fontSize: "2rem", whiteSpace: "pre-line" }}
          sequence={[
            ">",
            "> Hello, world.\n> I'm Christian Reyes.\n> Full-stack web developer.",
          ]}
          speed={35}
        ></TypeAnimation>
      </Typography>
    </Box>
  );
}
