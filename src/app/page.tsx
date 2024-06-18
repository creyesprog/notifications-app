import { Container } from "@mui/material";
import Terminal from "../modules/main/components/terminal/terminal";

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
