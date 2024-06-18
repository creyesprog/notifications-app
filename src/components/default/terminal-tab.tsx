import { Box } from "@mui/material";

import { colours } from "@/themes/colours/colours";

import TerminalIcon from "../icons/terminal-icon";

export default function TerminalTab() {
  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: colours.terminalBlack,
          marginLeft: "10px",
          width: "150px",
          borderRadius: "4.5px 4.5px 0 0",
        }}
      >
        <Box padding="5px">
          <TerminalIcon></TerminalIcon>
        </Box>
        <Box
          sx={{
            color: colours.terminalWhiteFont,
            fontSize: "12px",
            padding: "5px",
          }}
        >
          creyesprog@hello
        </Box>
      </Box>
    </Box>
  );
}
