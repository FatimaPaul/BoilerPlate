import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FSelect({
  label,
  selectArray,
  sx,
  variant,
  color,
  classname,
  stated
}) {
  const [selected, setSelected] = React.useState("");


  const handleChange = (e) => {
    setSelected(e.target.value);
    stated(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant={variant} className={classname} fullWidth>
        <InputLabel id={`demo-simple-select-${variant}-label`} color={color}>
          {label}
        </InputLabel>
        <Select
          labelId={`demo-simple-select-${variant}-label`}
          id={`demo-simple-select-${variant}`}
          value={selected}
          label={label}
          onChange={handleChange}
          sx={sx}
          color={color}
        >
          {selectArray.map((x, i) => (
            <MenuItem key={i} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
