import { Box } from "@mui/material";

import { TerminalCloseIcon, TerminalMaximizeIcon, TerminalMinimizeIcon } from "@/core/icons";
import { TerminalTab } from "./terminal-tab";

export function TerminalHeader() {
  return (
    <Box display="flex" justifyContent="space-between">
      <TerminalTab></TerminalTab>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" gap="36px" alignItems="center" justifyContent="center">
          <Box>
            <TerminalMinimizeIcon></TerminalMinimizeIcon>
          </Box>
          <Box>
            <TerminalMaximizeIcon></TerminalMaximizeIcon>
          </Box>
          <Box paddingRight="10px">
            <TerminalCloseIcon></TerminalCloseIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
