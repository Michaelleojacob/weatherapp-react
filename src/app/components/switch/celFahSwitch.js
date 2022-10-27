import "./switch.css";
import { Switch } from "@mui/material";

const CelFahSwitch = ({ toggleImperial }) => {
  return (
    <>
      <label>C</label>
      <Switch size="large" onChange={toggleImperial} />
      <label>F</label>
    </>
  );
};

export default CelFahSwitch;
