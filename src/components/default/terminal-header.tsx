import Close from "@mui/icons-material/close";
import { Box, Icon } from "@mui/material";
import TerminalTab from "./terminal-tab";
import { colours } from "@/themes/colours/colours";

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
