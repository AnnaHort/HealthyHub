import { styled } from '@mui/system';
import {
  FormControl,
  InputLabel,
  
  MenuItem,
  Select,
} from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  margin-top: 30px;
  width: 100%;

  

`;

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '34px',
  fontWeight: '500',
  lineHeight: '30px',
  color: 'var(--color-primary-white)',
  '&.MuiInputLabel-root:hover.Mui-focused': {
    color: 'var(--color-primary-white)',
  },
  '&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    color: 'var(--color-primary-white)',
  },
  [theme.breakpoints.up('834')]: {
    fonrSize: '30px',
    lineHeight: '36px',
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: 'var(--color-primary-grey)',

  '.css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
    color: 'var(--color-primary-white)',
  },

  [theme.breakpoints.up('834')]: {
    fontSize: '18px',
  },
}));

// export const StyledMenuList = styled(MenuList)(() => ({
//   backgroundColor: 'var(--color-primary-black-2)',
//   width: '212px',
//   height: '144px',
//   overflowY: 'auto',
//   borderRadius: '12px',
//   paddingTop: 0,
//   paddingBottom: 0,
//   boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',

//   '& .MuiList-root': {
//     backgroundColor: 'var(--color-primary-black-2)',
//     width: '212px',
//     height: '144px',
//     overflowY: 'auto',
//     borderRadius: '12px',
//     paddingTop: 0,
//     paddingBottom: 0,
//     boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
//   },

//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
//   scrollbarWidth: 'none',
// }));

export const StyledMenuItem = styled(MenuItem)`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-grey);
  padding-top: '2px';
  padding-right: 16px;
  padding-left: 16px; /* Было paddingLight, возможно, имелось в виду paddingLeft */
  padding-bottom: '2px';
  margin: 0;
  min-height: auto;
  //margin-bottom: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
    color: var(--color-primary-green-lite);
  }
`;
