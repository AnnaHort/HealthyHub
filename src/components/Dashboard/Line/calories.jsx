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

import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Container = styled.div`
  margin-left: 10px;
  overflow-y: auto;

  @media (min-width: 834px) {
    margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const CaloriesTitle = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`;

const CaloriesDesc = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`;

const ChartsContainer = styled.div`
  display: flex;
  min-width: 676px;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media (min-width: 834px) {
    min-width: 780px;
    overflow-x: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px) {
    min-width: 676px;
  }
`;

const CaloriesDashboard = ({ data, selectedMonth }) => {
  // хранилище данных
  const [chartData, setChartData] = useState([]);
  const [averageFood, setAverageFood] = useState(0);
  // отслеживание наличия данных
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    console.log('Entering useEffect for rendering days...');
    // проверка есть ли дата массивом, и меет ли какие-то данные, если нет, то график устанавливается в ноль
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error(`Invalid or missing 'data' array`);
      setHasData(false);
      setChartData([]);
      return;
    }

    const renderDays = async () => {
      const formatDate = new Date(2023, selectedMonth, 0);
      const daysInMonth = formatDate.getDate();
      // создвние массива длинной в колличество дней в месяце
      const days = Array.from({ length: daysInMonth }, (_, index) => 0);

      try {
        // выполняем итерацию по каждому эл.[]
        data.forEach((day) => {
          if (day.data) {
            const daysIndex = Number(day.data.split(',')[0]) - 1;
            // проверяем что индекс в диапазоне текущих дней в месяце
            if (daysIndex >= 0 && daysIndex < daysInMonth) {
              days[daysIndex] = day.food || 0;
              // если выходит за переделы диапазона
            } else {
              console.error(`Invalid day index: ${daysIndex}`);
            }
            // если обьект не содержит свойство дата
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
    // вызов при каждом изменении
    renderDays();
  }, [data, selectedMonth]);

  // содержит колличество дней в текущем месяце
  const formatDate = new Date(2023, selectedMonth, 0).getDate();
  // создаём новый массив для лэйбла от 1 до колличества дней в месяце
  const labels = Array.from({ length: formatDate }, (_, index) => index + 1);

  useEffect(() => {
    console.log('Entering useEffect for calculating average food...');
    if (!data || data.length === 0 || chartData.length === 0) {
      console.error(`No data available for the current month`);
      setHasData(false);
      setAverageFood(0);
      return;
    }


    // Получаем текущую дату
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


    if (chartData.length > 0) {
      // Вычисляем среднее количество воды для текущего месяца
      const filteredChartData = chartData.filter(
        (calories) => !isNaN(calories)
      );
      if (filteredChartData.length > 0) {
        const total = filteredChartData.reduce(
          (acc, calories) => acc + calories,
          0
        );
        const calculatedAveragecalories = total / filteredChartData.length;
        setAverageFood(Math.floor(calculatedAveragecalories));
      } else {
        // если данных нет, среднее значение устанавливаем в 0
        setAverageFood(0);
      }
    }

    // Обновление hasData в зависимости от наличия данных
    setHasData(filteredData.length > 0);
  }, [data, chartData, selectedMonth]);

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

  const info = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: chartData,
        borderColor: '#e3ffa8',
        backgroundColor: '#0F0F0F',
        pointBackgroundColor: '#e3ffa8',
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <TitleContainer>
        <CaloriesTitle>Calories</CaloriesTitle>
        <CaloriesDesc>
          {hasData ? `Average value: ${averageFood}` : 'No data available'}
        </CaloriesDesc>
      </TitleContainer>

      <ChartsContainer>
        <Line
          options={options}
          data={info}
          style={{ backgroundColor: '#0F0F0F', borderRadius: '12px' }}
        />
      </ChartsContainer>
    </Container>
  );
};

export default CaloriesDashboard;
