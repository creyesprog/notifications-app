import { Box } from "@mui/material";

import { colours } from "@/themes/colours/colours";

export default function TerminalContent() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: colours.terminalBlack,
      }}
    ></Box>
  );
}
