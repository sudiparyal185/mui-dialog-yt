import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
} from '@mui/material';

export const MuiDialog = ({ isDialogOpen, handleCloseDialog }) => {
  const dialogTitle = (
    <>
      <Typography variant='h1' sx={{ fontSize: '1.5rem', fontWeight: 800 }}>
        Please review user agreement
      </Typography>
    </>
  );
  const dialogContent = (
    <>
      <Typography variant='body1' component='p'>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </Typography>
    </>
  );

  const dialogActions = (
    <>
      <Button
        variant='contained'
        color='error'
        onClick={handleCloseDialog}
        sx={{ textTransform: 'inherit' }}
      >
        Disagree
      </Button>
      <Button
        variant='contained'
        color='secondary'
        onClick={handleCloseDialog}
        sx={{ textTransform: 'inherit' }}
      >
        Agree
      </Button>
    </>
  );
  return (
    <Box>
      <Dialog open={isDialogOpen}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>{dialogActions}</DialogActions>
      </Dialog>
    </Box>
  );
};
