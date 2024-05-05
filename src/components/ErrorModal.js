import React from 'react';
import Modal from '@mui/joy/Modal';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import { useErrorModal } from '../utils/ErrorModalContext'; // Update the path as needed

const ErrorModal = () => {
  const { error, isModalOpen, hideErrorModal } = useErrorModal();

  return (
    <Modal open={isModalOpen} onClose={hideErrorModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 'lg',
          p: 2,
          borderRadius: 'md',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Alert
          variant="soft"
          color="danger"
          sx={{ alignItems: 'flex-start', gap: 2 }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Error</Typography>
            <Typography level="body-md">{error}</Typography>
          </Box>
        </Alert>
        <Button variant="solid" color="neutral" onClick={hideErrorModal}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
