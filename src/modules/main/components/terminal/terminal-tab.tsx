import { Box, Typography } from "@mui/material";

import { colours } from "@/themes/colours/colours";
import { TerminalIcon } from "../../../../core/icons";
import { TerminalCloseIcon } from "./terminal-close-icon";

export function TerminalTab() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colours.terminalBlack,
        marginTop: "10px",
        marginLeft: "10px",
        width: "175px",
        borderRadius: "6px 6px 0 0",
        padding: "5px",
      }}
    >
      <Box display="flex" alignItems="center">
        <TerminalIcon></TerminalIcon>
      </Box>
      <Box
        sx={{
          color: colours.terminalWhiteFont,
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          paddingLeft: "5px",
        }}
      >
        <Typography variant="caption">creyesprog@hello</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginLeft="auto">
        <TerminalCloseIcon></TerminalCloseIcon>
      </Box>
    </Box>
  );
}
