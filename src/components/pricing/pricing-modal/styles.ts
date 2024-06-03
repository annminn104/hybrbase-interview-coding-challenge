'use client';

import { CircularProgress, styled } from '@mui/material';

export const ModalWrap = styled(
  'form',
  {}
)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey?.[100],
  '&:hover': {
    backgroundColor: theme.palette.grey?.[50],
    boxShadow: theme.shadows[3]
  }
}));

export const ModalProgress = styled(
  CircularProgress,
  {}
)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-12px',
  marginLeft: '-12px'
}));
