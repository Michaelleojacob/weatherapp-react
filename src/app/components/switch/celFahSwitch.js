import './switch.css';
import CustomSwitch from './customSwitch';

const CelFahSwitch = ({ toggleImperial }) => {
  return (
    <div className='switch-container'>
      <label>C</label>
      <CustomSwitch onChange={toggleImperial} defaultChecked={false} />
      <label>F</label>
    </div>
  );
};

export default CelFahSwitch;
