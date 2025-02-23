import React, { SyntheticEvent } from 'react';
import { Icon, IconButton, Snackbar, SnackbarCloseReason } from '@mui/material';
import { useMessageAreaState } from 'react-aws-cognito-lambda-dynamodb-base-prototype-app';

const MessageArea = () => {
  const { message, dismissMessage } = useMessageAreaState();

  const handleClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    dismissMessage();
  };

  const handleClose = (_event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    dismissMessage();
  };

  const handleOnExited = () => {
    dismissMessage();
  };

  return <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    open={!!message}
    autoHideDuration={5000}
    onClose={handleClose}
    TransitionProps={{
      onExited: handleOnExited
    }}
    message={message}
    action={
      <IconButton color="inherit" onClick={handleClick}>
        <Icon>close</Icon>
      </IconButton>
    }
  />;
};

export default MessageArea;
