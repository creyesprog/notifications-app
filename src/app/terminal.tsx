import TerminalIcon from "@/components/icons/terminal-icon";
import { Box } from "@mui/material";

export default function Terminal() {
  const terminalBlack = "#000000";
  const terminalWhiteFont = "#ffffff";

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
          display: "flex",
          flexDirection: "row",
          //   justifyContent: "flex-start",
          //   maxHeight: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: terminalBlack,
            marginLeft: "10px",
            width: "150px",
            borderRadius: "4.5px 4.5px 0 0",
          }}
        >
          <Box
            sx={{
              padding: "5px",
            }}
          >
            <TerminalIcon></TerminalIcon>
          </Box>
          <Box
            sx={{
              color: terminalWhiteFont,
              fontSize: "12px",
              padding: "5px",
            }}
          >
            creyesprog@hello
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: terminalBlack,
        }}
      ></Box>
    </Box>
  );
}
