import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getUserMonthsWeight } from '../../../redux/dashboardPage/dashboardSelector';
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
  },
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

  '@media (min-width: 1440px)': {},
});

const WeightCharts = ({data, selectedMonth }) => {
  const [days, setDays] = useState([]);
  // хранилище данных
  const [averageWeight, setAverageWeight] = useState(0);

  // наличие данных
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    // проверка есть ли дата массивом, и меет ли какие-то данные
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error('Data is not an array');
     setDays([])
      return;
    }
    const formatDate = new Date(2024, selectedMonth - 1, 1);
    const daysInMonth = new Date(
      formatDate.getFullYear(),
      formatDate.getMonth() + 1,
      0
    ).getDate();

    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );

    setDays(daysArray);
  }, [selectedMonth, data]);

  // вычисление среднего колличесвта употребляемых каллорий
  useEffect(() => {
    if (!data || data.length === 0 || !Array.isArray(data)) {
      console.error('Data is not an array');
      setAverageWeight(0);
      return;
    }

    // получаем текущую дату
    const currentDate = new Date();
    const filterData = data.filter((item) => {
      if (!item.data) {
        console.error(`Missing 'data' property in day object`);
        return false;
      }

      const [day, month] = item.data.split(', ');
      const itemDate = new Date(2024, getMonthNumber(month), day);

      return (
        itemDate.getMonth() === currentDate.getMonth() &&
        itemDate.getFullYear() === currentDate.getFullYear()
      );
    });
      // Вычисляем среднее количество weight для текущего месяца
    const weightsForDays = days.map((day) =>
      filterData
        .filter(
          (item) =>
            item.data &&
            new Date(
              2024,
              getMonthNumber(item.data.split(', ')[1]),
              item.data.split(', ')[0]
            ).getDate() === day
        )
        .map((item) => item.weight || 0)
        .reduce((acc, weight) => acc + weight, 0)
    );

    setAverageWeight(
      Math.floor(
        weightsForDays.reduce((acc, weight) => acc + weight, 0) /
          weightsForDays.length
      ))
    
    // Обновление hasData в зависимости от наличия данных
    setHasData(filterData.length > 0);
  }, [data, selectedMonth]);

  // Функция для преобразования названия месяца в числовой формат
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
  return (
    <div>
      <WeightTitleContainer>
        <WeightTitleStyled>Weight</WeightTitleStyled>
        <AverageValueStyled>
          {hasData
            ? `Average value: ${isNaN(averageWeight) ? 0 : averageWeight}`
            : 'No data available'}
        </AverageValueStyled>
      </WeightTitleContainer>
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="center">Weight</TableCell>
              {days.map((day, index) => (
                <TableCell key={index} align="center">
                  {day[index]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {days.map((day, index) => (
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
