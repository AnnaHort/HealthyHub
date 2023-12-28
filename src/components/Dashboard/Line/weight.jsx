import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)({
  marginLeft: '10px',
  marginBottom: '68px',
  overflowX: 'auto',

  '@media (min-width: 834px)': {
    minWidth: 780,
    marginLeft: 'unset',
  },
    '@media (min-width: 1440px)': {
    minWidth: 1372,
  }
});

const StyledTable = styled(Table)({
  backgroundColor: 'var(--color-primary-black-2)',
  minWidth: 780,

  '@media (min-width: 834px)': {
    minWidth: 780,
  },

  '& th, & td': {
    position: 'relative',
    backgroundClip: 'padding-box',
    color: 'var(--color-primary-white)',
    borderBottom: '1px solid var(--color-primary-black-2)',
  },
  '& th': {
    padding: '0',
    margin: '0',
  },
  '& td': {
    padding: '0',
    margin: '0',
  },

  '& thead th': {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    paddingTop: '24px',
    paddingLeft: '22px',
    paddingRight: '20px',

    '@media (min-width: 834px)': {
      fontSize: '10px',
      lineHeight: '16px',

      '&:not(:first-of-type)': {
        paddingLeft: '6px', // отступ между цифрами
      },
      '&:not(:last-of-type)': {
        paddingRight: '0',
      },
    },

    '@media (min-width: 1440px)': {
      paddingLeft: '21px',
    },
    '&:not(:first-of-type)': {
      paddingLeft: '23px',
      paddingRight: '41px',
    },
    '&:not(:last-of-type)': {
      paddingRight: '0',
    },
  },

  '& tbody tr:first-of-type td': {
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '14px',
    paddingTop: '16px',
    paddingBottom: '36px',
    paddingLeft: '24px',

    '@media (min-width: 834px)': {
      paddingRight: '20px',
      paddingTop: '10px',
      paddingBottom: '44px',
      '&:not(:first-of-type)': {
        paddingLeft: '10px', // отступ между цифрами
      },
      '&:not(:last-of-type)': {
        paddingRight: '0',
      },
    },

    '@media (min-width: 1440px)': {
      paddingTop: '16px',
      paddingBottom: '36px',
      paddingLeft: '44px',
      paddingRight: '24px',
    },
    '&:not(:first-of-type)': {
      paddingLeft: '29px', // отступ между цифрами
    },
    '&:not(:last-of-type)': {
      paddingRight: '0',
    },
  },
});

const WeightTitleContainer = styled('div')({
  display: 'flex',
  marginLeft: '10px',
  marginBottom: '9px',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (min-width: 1440px)': {
    justifyContent: 'start',
  },
});

const WeightTitleStyled = styled('h2')({
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '26px',
  color: 'var(--color-primary-white)',

  '@media (min-width: 1440px)': {
    fontSize: '22px',
    marginRight: '40px',
    lineHeight: '32px',
  },
});

const AverageValueStyled = styled('p')({
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '20px',
  color: 'var(--color-primary-white)',
  marginRight: '10px',

  '@media (min-width: 1440px)': {
   
  },
});

const WeightCharts = () => {
  const weights = [];

  for (let i = 68; i >= 38; i--) {
    weights.push(i);
  }
  const daysOfMonth = [];

  for (let i = 1; i <= 31; i++) {
    daysOfMonth.push(i);
  }

  return (
    <div>
      <WeightTitleContainer>
        <WeightTitleStyled>Weight</WeightTitleStyled>
        <AverageValueStyled>Average value: 68 kg</AverageValueStyled>
      </WeightTitleContainer>
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              {weights.map((weight, index) => (
                <TableCell key={index} align="center">
                  {weight}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {daysOfMonth.map((day, index) => (
                <TableCell key={index} align="center">
                  {day}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default WeightCharts;
