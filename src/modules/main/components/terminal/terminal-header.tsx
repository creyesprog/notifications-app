import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Close from "@mui/icons-material/close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Box } from "@mui/material";

import { colours } from "@/themes/colours/colours";
import { icons } from "@/core/icons";
import { TerminalTab } from "./terminal-tab";

export function TerminalHeader() {
  return (
    <Box display="flex" justifyContent="space-between">
      <TerminalTab></TerminalTab>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" gap="6.5px" alignItems="center" justifyContent="center">
          <Box>
            <MinimizeIcon
              sx={{
                color: colours.terminalWhiteFont,
              }}
            ></MinimizeIcon>
          </Box>
          <Box>
            <FontAwesomeIcon
              icon={icons.farSquareFull}
              color={colours.terminalWhiteFont}
              width="0.7em"
            ></FontAwesomeIcon>
          </Box>
          <Box>
            <Close
              sx={{
                color: colours.terminalWhiteFont,
              }}
            ></Close>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
