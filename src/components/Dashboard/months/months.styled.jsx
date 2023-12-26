import { styled } from '@mui/system';
import { FormControl, InputLabel, MenuList,MenuItem, Select } from '@mui/material';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: '140px',

  
  [theme.breakpoints.up('834')]: {},
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '30px',
  color: 'var(--color-primary-white)',

  [theme.breakpoints.up('834')]: {
    fonrSize: '30px',
    lineHeight: '36px',
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: 'var(--color-primary-grey)',
  [theme.breakpoints.up('834')]: {
    fontSize: '18px',
  },
}));


export const StyledMenuList = styled(MenuList)(() => ({
  backgroundColor: 'var(--color-primary-black-2)',
  width: '212px',
  height: '144px',
  overflowY: 'auto',
  borderRadius: '12px',
  paddingTop: 0,
  paddingBottom: 0,
  boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',

  '& .MuiList-root': {
    backgroundColor: 'var(--color-primary-black-2)',
    width: '212px',
    height: '144px',
    overflowY: 'auto',
    borderRadius: '12px',
    paddingTop: 0,
    paddingBottom: 0,
    boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
}));



export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
  color: 'var(--color-primary-grey)',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    color: 'var(--color-primary-green-lite)',
  },
}));
