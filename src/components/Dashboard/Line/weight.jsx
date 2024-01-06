import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
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

const WeightCharts = ({ data, selectedMonths }) => {
//   // хранилище данных
//   const [chartData, setChartData] = useState([]);
//   const [averageWeight, setAverageWeight] = useState(0);

//   // отслеживание наличия данных
//   const [hasData, setHasData] = useState(true);

//   useEffect(() => {
//     // проверка есть ли дата массивом, и меет ли какие-то данные
//     if (!data || !Array.isArray(data) || data === 0) {
//       console.error(`Invalid or missing 'data' array`);
//       setHasData(false);
//       setChartData([]);
//       return;
//     }

//     const renderDays = () => {
//       const formatDate = new Date(2024, selectedMonths, 0);
//       const daysInMonth = formatDate.getDate();

//       // создание массива длинной в колличество дней в месяце
//       const days = Array.from({ length: daysInMonth }, () => 0);

//       try {
//         // выполняем итерацию по каждому эл.[]
//         data.forEach((day) => {
//           console.log('Day:', day);
//           if (day.data) {
//             const daysIndex = Number(day.data.split(',')[0]) - 1;
//             // проверяем что индекс в диапазоне текущих дней в месяце
//             if (daysIndex >= 0 && daysIndex < daysInMonth) {
//               days[daysIndex] = day.weight || 0;
//               // если выходит за переделы диапазона
//             } else {
//               console.error(`Invalid day index: ${daysIndex}`);
//             }
//             // если обьект не содержит свойство дата
//           } else {
//             console.error(`Missing 'data' property in day object`);
//           }
//         });
//         console.log('ChartData:', days);
//         setChartData(days);
//         setHasData(true);
//       } catch (error) {
//         console.error(`Error during rendering days: ${error}`);
//         setHasData(false);
//         setChartData([]);
//       }
//     };
//     // вызов при каждом изменении
//     renderDays();
//   }, [data, selectedMonths]);

//   // вычисление среднего колличесвта употребляемых каллорий
//   useEffect(() => {
//     if (!data || data.length === 0 || chartData.length === 0) {
//       console.error('No data or chartData provided.');
//       setHasData(false);
//       setAverageWeight(0);
//       return;
//     }
//     // Получаем текущую дату
//     const currentDate = new Date();
//  const filterData = data.filter((item) => {
//    if (!item.data) {
//      console.error(`Missing 'data' property in day object:`, item);
//      return false;
//    }

//    const [day, month] = item.data.split(', ');
//    const itemDate = new Date(2024, getMonthNumber(month), day);
//    return (
//      itemDate.getMonth() === currentDate.getMonth() &&
//      itemDate.getFullYear() === currentDate.getFullYear()
//    );
//  });

//     if (chartData.length > 0) {
//       const filteredChartData = chartData.filter((weight) => !isNaN(weight));
//       if (filteredChartData.length > 0) {
//         const totalWeigth = filteredChartData.reduce((acc, weight) => {
//           return acc + weight;
//         }, 0);

//         const calculatedAveragecalories =
//           totalWeigth / filteredChartData.length;
//         if (!isNaN(calculatedAveragecalories)) {
//           setAverageWeight(Math.floor(calculatedAveragecalories));
//         } else {
//           setAverageWeight(0);
//         }
//       } else {
//         // если данных нет, среднее значение устанавливаем в 0
//         setAverageWeight(0);
//       }
//     }
//     // Обновление hasData в зависимости от наличия данных
//     setHasData(filterData.length > 0);
//   }, [data, chartData, selectedMonths]);

//   // Функция для преобразования названия месяца в числовой формат
//   function getMonthNumber(monthName) {
//     const months = [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'October',
//       'November',
//       'December',
//     ];
//     return months.indexOf(monthName);
//   }

  return (
    <div>
      <WeightTitleContainer>
        <WeightTitleStyled>Weight</WeightTitleStyled>
        <AverageValueStyled>
          {/* {hasData
            ? `Average value: ${isNaN(averageWeight) ? 0 : averageWeight}`
            : 'No data available'} */}
        </AverageValueStyled>
      </WeightTitleContainer>
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {/* {data[0].weight || 0} */}
              <TableCell align="center"></TableCell>
              {/* {data.map((dayData, index) => ( */}
              <TableCell align="center">
                {/* {dayData.weight || 0} */}
              </TableCell>
              {/* ))} */}
            </TableRow>
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default WeightCharts;
