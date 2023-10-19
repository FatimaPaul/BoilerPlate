import { TextField } from "@mui/material";

export default function FInput({
  variant,
  label,
  color,
  value,
  onchange,
  sx,
  classname,
}) {
  return (
    <TextField
      id={`${variant}-basic`}
      label={label}
      variant={variant}
      color={color}
      value={value}
      onChange={onchange}
      sx={sx}
      className={classname}
    />
  );
}
