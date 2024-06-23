import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Close from "@mui/icons-material/close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Box } from "@mui/material";

import { colours } from "@/themes/colours/colours";
import { icons } from "@/core/icons";
import { TerminalTab } from "./terminal-tab";

export function TerminalHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <TerminalTab></TerminalTab>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <MinimizeIcon
            sx={{
              color: colours.terminalWhiteFont,
              fontSize: "1rem",
            }}
          ></MinimizeIcon>
          <FontAwesomeIcon icon={icons.farSquareFull}></FontAwesomeIcon>
          <Close
            sx={{
              color: colours.terminalWhiteFont,
              fontSize: "1rem",
            }}
          ></Close>
        </Box>
      </Box>
    </Box>
  );
}
