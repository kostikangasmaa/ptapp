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

function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Pt App
            </Typography>
            <Button color="inherit" component={Link} to="/">Customer List</Button>
            <Button color="inherit" component={Link} to="/trainings">Trainings List</Button>
          </Toolbar>
        </AppBar>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/trainings" element={<TrainingsList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

