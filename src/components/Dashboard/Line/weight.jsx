import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { useEffect, useState } from 'react';

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
      paddingLeft: '29px', 
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

// const WeightCharts = () => {
//   const weights = [];

//   for (let i = 68; i >= 38; i--) {
//     weights.push(i);
//   }
//   const daysOfMonth = [];

//   for (let i = 1; i <= 31; i++) {
//     daysOfMonth.push(i);
//   }
const WeightDashboard = ({ data, selectedMonth }) => {
const [chartData, setChartData] = useState([]);
  const [weight, setWeight] = useState(0);
  const [hasData, setHasData] = useState(true);

 useEffect(() => {
    console.log('Entering useEffect for rendering days...');
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error(`Invalid or missing 'data' array`);
      setHasData(false);
       setChartData([]);
      return;
    }

    const renderDays = async () => {
      const formatDate = new Date(2023, selectedMonth, 0);
      const daysInMonth = formatDate.getDate();
      const days = Array.from({ length: daysInMonth }, (_, index) => 0);

      try {
        data.forEach((day) => {
          if (day.data) {
            const daysIndex = Number(day.data.split(',')[0]) - 1;
            if (daysIndex >= 0 && daysIndex < daysInMonth) {
              days[daysIndex] = day.water || 0;
            } else {
              console.error(`Invalid day index: ${daysIndex}`);
            }
          } else {
            console.error(`Missing 'data' property in day object`);
          }
        });
        setChartData(days);
        setHasData(true);
      } catch (error) {
        console.error(`Error during rendering days: ${error}`);
        setHasData(false);
        setChartData([]);
      }
    };

    renderDays();
  }, [data, selectedMonth]);

  const formatDate = new Date(2023, selectedMonth, 0).getDate();
  const labels = Array.from({ length: formatDate }, (_, index) => index + 1);

 useEffect(() => {
   console.log('Entering useEffect for calculating average water...');
   if (!data || data.length === 0 || chartData.length === 0) {
     console.error(`No data available for the current month`);
     setHasData(false);
     setWeight(0);
     return;
   }

   
   const currentDate = new Date();
   const filteredData = data.filter((item) => {
     if (!item.data) {
       console.error(`Missing 'data' property in day object`);
       return false;
     }

     const [day, month] = item.data.split(', ');
     const itemDate = new Date(2023, getMonthNumber(month), day);

     return (
       itemDate.getMonth() === currentDate.getMonth() &&
       itemDate.getFullYear() === currentDate.getFullYear()
     );
   });

   console.log('Filtered Data:', filteredData);

   
   setHasData(filteredData.length > 0);
 }, [data, chartData, selectedMonth]);
  


 function getMonthNumber(monthName) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months.indexOf(monthName);
  }

   console.log('hasData:', hasData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
      y: {
        position: 'left',
        ticks: {
          beginAtZero: true,
          stepSize: 1000,
          callback: function (value) {
            if (value >= 1000) {
              return (value / 1000).toLocaleString() + 'K';
            }
            return value;
          },
        },
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
    },
    layout: {
      padding: {
        left: 14,
        right: 31,
        top: 25,
        bottom: 40,
      },
    },
  };

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

export default WeightDashboard;
