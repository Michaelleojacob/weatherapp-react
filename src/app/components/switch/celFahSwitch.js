import './switch.css';
import CustomSwitch from './customSwitch';

const CelFahSwitch = ({ toggleImperial }) => {
  return (
    <div className='switch-container'>
      <label>C</label>
      <CustomSwitch
        size='large'
        onChange={toggleImperial}
        sx={[
          {
            '&:unchecked': {
              color: 'blue',
              backgroundColor: 'blue',
            },
          },
        ]}
      />
      <label>F</label>
    </div>
  );
};

export default CelFahSwitch;
