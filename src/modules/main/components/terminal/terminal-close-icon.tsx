import { colours } from "@/themes/colours/colours";
import Close from "@mui/icons-material/close";

export default function TerminalCloseIcon() {
  return (
    <Close
      sx={{
        color: colours.terminalWhiteFont,
        fontSize: "1rem",
      }}
    ></Close>
  );
}
