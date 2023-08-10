import {TextField} from '@mui/material'

export const Fields = ({ handleBlur, handleChange, values, name }) => {
   
    return (
      <TextField
        fullWidth
        variant="filled"
        type="text"
        value={values.name}
        label={name}
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        sx={{
          gridColumn: "span 2",
          input: {
            color: "black",
            background: "#eeeeee",
          },
        }}
        InputLabelProps={{ style: { color: "black" } }}
      />
    );
  };