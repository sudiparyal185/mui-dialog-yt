import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { MuiDialog } from './components/Dialog';
function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className='app'>
      <h1>Material-UI V5 Tutorial</h1>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setIsDialogOpen(true)}
      >
        Open Dialog
      </Button>
      <MuiDialog
        isDialogOpen={isDialogOpen}
        handleCloseDialog={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export default App;
