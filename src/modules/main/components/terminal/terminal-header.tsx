import Close from "@mui/icons-material/close";
import MinimizeIcon from '@mui/icons-material/Minimize';
import { Box } from "@mui/material";

import { colours } from "@/themes/colours/colours";

import TerminalTab from "./terminal-tab";

export default function TerminalHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <TerminalTab></TerminalTab>
      <Box>
        <MinimizeIcon sx={{
            color: colours.terminalWhiteFont,
            fontSize: "1rem",            
        }}></MinimizeIcon>
        <Close
          sx={{
            color: colours.terminalWhiteFont,
            fontSize: "1rem",
          }}
        ></Close>
      </Box>
    </Box>
  );
}
