import { Box } from "@mui/material";

import { TerminalContent, TerminalHeader } from '.';

export default function Terminal() {
  return (
    <Box
      sx={{
        backgroundColor: "#2e2e2e",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: "6px",
        boxShadow: "0px 0px 10px 0px #000000",
      }}
    >
      <TerminalHeader></TerminalHeader>
      <TerminalContent></TerminalContent>
    </Box>
  );
}
