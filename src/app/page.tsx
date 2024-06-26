import { Container } from "@mui/material";

import Terminal from "../modules/main/components/terminal";

export default function Index() {
  return (
    <Container maxWidth="md"
      sx={{
        paddingTop: "10vh",
      }}
    >
      <Terminal></Terminal>
    </Container>
  );
}
