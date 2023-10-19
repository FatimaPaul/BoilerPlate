import * as React from "react";
import IconButton from "@mui/material/IconButton";

export default function FButtonIcon({ children, label, color, sx, onclick }) {
  return (
    <IconButton aria-label={label} color={color} sx={sx} onClick={onclick}>
      {children}
    </IconButton>
  );
}
