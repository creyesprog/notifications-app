import { Container } from "@mui/material";
import Terminal from "./terminal";

export default function Index() {
  return (
    <Container
      sx={{
        paddingTop: "10vh",
      }}
    >
      <Terminal></Terminal>
    </Container>
  );
}
