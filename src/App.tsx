// components
import Drawer from './components/Drawer';
import MiniDrawer from './components/NewDrawer'
import Employee from './components/employee/Employee';
import { Grid } from '@mui/material';

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
