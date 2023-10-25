import * as React from "react";
import Button from "@mui/material/Button";

export default function FButton({
  variant,
  children,
  color,
  onclick,
  sx,
  size,
}) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onclick}
      sx={sx}
      size="small"
    >
      {children}
    </Button>
  );
}
