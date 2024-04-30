import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  alignSelf: 'stretch',
  maxWidth: '400px',
  fontSize: '14px',
  color: '#fff',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  letterSpacing: '1.44px',
  lineHeight: '222%',
  borderRadius: '8px',
  backgroundColor: '#ffa935 !important', // Added !important here
  '&:hover': {
    backgroundColor: '#ff9800 !important', // Added !important to hover state
  },
  padding: '0px 60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default CustomButton;
