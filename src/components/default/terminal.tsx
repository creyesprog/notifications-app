import TerminalIcon from "@/components/icons/terminal-icon";
import { Box } from "@mui/material";
import TerminalTab from "./terminal-tab";
import { colours } from "@/themes/colours/colours";

export default function Terminal() {
  return (
    <Box
      sx={{
        backgroundColor: "#2e2e2e",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4.5px",
        boxShadow: "0px 0px 10px 0px #000000",
      }}
    >
      <TerminalTab></TerminalTab>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: colours.terminalBlack,
        }}
      ></Box>
    </Box>
  );
}
