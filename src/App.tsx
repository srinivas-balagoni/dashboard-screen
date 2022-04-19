// MUI
import { Grid } from '@mui/material';
// Components
import Drawer from './components/Drawer';
import Employee from './components/employee/Employee';
// CSS
import "./App.css";

function App() {
  return (
    <div className="App" style={{}}>
      <Grid container>
          <Grid item xs={2.3}>
            <Drawer />
          </Grid>
          <Grid item xs={9.7} sx={{background: "#F2F2F2", px: 5}}>
            <Employee />
          </Grid>
      </Grid>
    </div>
  );
}

export default App;
