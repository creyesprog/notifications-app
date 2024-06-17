import { Box } from "@mui/material";

export default function Terminal() {
  const flexGrowChildTerminal = 0.93;
  const flexGrowChildTerminalHeader = 1 - flexGrowChildTerminal;

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
      <Box
        sx={{
          marginTop: "10px",
          flexGrow: flexGrowChildTerminalHeader,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
          height: "1px"
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "black",
            marginLeft: "10px",
            width: "100px",
            maxHeight: "50px",
          }}
        >test</Box>
      </Box>
      <Box
        sx={{
          flexGrow: flexGrowChildTerminal,
          backgroundColor: "#000000",
        }}
      ></Box>
    </Box>
  );
}
