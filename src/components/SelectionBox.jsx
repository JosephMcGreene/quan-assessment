import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

export default function SelectionBox() {
  const radioOptions = [
    "Never",
    "Rarely",
    "Occasionally",
    "Sometimes",
    "Frequently",
    "Usually",
    "Always",
  ];

  return (
    <FormControl className="selection-box">
      <h3 className="yellow-text">During the past 2 weeks</h3>
      <h3>I have been eating and drinking healthily</h3>
      <FormLabel />

      <RadioGroup row name="foodAndDrinkRadios">
        {radioOptions.map((option, index) => {
          return (
            <FormControlLabel
              key={option + index}
              value={option.toLowerCase()}
              control={
                <Radio
                  size="large"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 60,
                    },
                  }}
                />
              }
              label={option}
              labelPlacement="bottom"
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
