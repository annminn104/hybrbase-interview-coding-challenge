'use client';

import { Box, Button, styled, Typography } from '@mui/material';

export const CardWrap = styled(
  Box,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'center', 'center'),
  rowGap: theme.spacing(1),
  backgroundColor: theme.palette.grey?.[100],
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.grey?.[50],
    boxShadow: theme.shadows[3]
  }
}));

export const CardTitle = styled(
  Typography,
  {}
)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '32px',
  lineHeight: '40px'
}));

export const CardDesc = styled(
  Typography,
  {}
)(({ theme }) => ({ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }));

export const CardPrice = styled(
  Typography,
  {}
)(({ theme }) => ({ fontWeight: theme.typography.fontWeightBold, fontSize: '24px', lineHeight: '28px', color: theme.palette.grey?.[700] }));

export const CardButton = styled(Button, {})(({ theme }) => ({}));
