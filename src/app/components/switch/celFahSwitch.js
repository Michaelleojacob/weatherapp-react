import './switch.css';
import { Switch } from '@mui/material';

const CelFahSwitch = ({ toggleImperial }) => {
  return (
    <div className='switch-container'>
      <label>C</label>
      <Switch size='large' onChange={toggleImperial} />
      <label>F</label>
    </div>
  );
};

export default CelFahSwitch;
