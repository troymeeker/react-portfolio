import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


       
function Toggle() {
  return (
    <FormGroup>
      
      <FormControlLabel className="toggle" control={<Switch />} label="Dark" color="white"  />
     
    </FormGroup>
  
  );
    
}
export default Toggle;