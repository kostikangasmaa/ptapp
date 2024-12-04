import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import TrainingsList from './components/TrainingsList';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CalendarPage from './components/CalendarPage';
import ActivityChart from './components/ActivityChart';

function App() {
  return (
    <Router basename='/ptapp'>
      <Container maxWidth="xl">
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Pt App
            </Typography>
            <Button color="inherit" component={Link} to="/">Customer List</Button>
            <Button color="inherit" component={Link} to="/trainings">Trainings List</Button>
            <Button color="inherit" component={Link} to="/calendar">Calendar</Button>
            <Button color="inherit" component={Link} to="/trainingchart">Training Chart</Button>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/trainings" element={<TrainingsList />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/trainingchart' element={<ActivityChart />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

