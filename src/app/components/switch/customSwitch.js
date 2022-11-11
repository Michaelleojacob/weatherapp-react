import { Switch } from '@mui/material';
import styled from '@emotion/styled';

const CustomSwitch = styled(Switch)({
  '& .MuiSwitch-switchBase': {
    color: 'blue',
    '&.Mui-checked': {
      color: 'red',
      '& + .MuiSwitch-track': {
        backgroundColor: 'red',
      },
    },
  },
  '& .MuiSwitch-track': {
    color: 'blue',
    backgroundColor: 'blue',
  },
});

export default CustomSwitch;
