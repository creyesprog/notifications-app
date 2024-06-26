import { colours } from "@/themes/colours/colours";
import CloseIcon from '@mui/icons-material/Close';

export function TerminalCloseIcon() {
  return (
    <CloseIcon
      sx={{
        color: colours.terminalWhiteFont,
        fontSize: "1rem",
      }}
    ></CloseIcon>
  );
}
