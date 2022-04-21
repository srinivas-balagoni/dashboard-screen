import { BrowserRouter, Routes, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// MUI
import { Grid } from '@mui/material';
// Components
import Drawer from './components/Drawer';
import Employee from './components/employee/Employee';
import Manager from "./components/manager/Manager";
// CSS
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Grid container>
          <Grid item xs={2.3}>
            <Drawer />
          </Grid>
          <Grid item xs={9.7} sx={{background: "#F2F2F2", px: 5}}>
              <Routes>
                <Route path="/employee" element={<Employee />}/>
                <Route path="/manager" element={<Manager />}/>
              </Routes>
          </Grid>
      </Grid>
    </BrowserRouter>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;
