import { SvgIcon } from "@mui/material";

export function TerminalCloseIcon() {
  return (
    <SvgIcon
      sx={{
        display: "block",
        width: "15px",
        height: "15px",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="23.2879"
          y1="22.7121"
          x2="1.10175"
          y2="0.52595"
          stroke="white"
          strokeWidth="0.6"
        />
        <line
          y1="-0.3"
          x2="31.3759"
          y2="-0.3"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0.499969 22.4999)"
          stroke="white"
          strokeWidth="0.6"
        />
      </svg>
    </SvgIcon>
  );
}
