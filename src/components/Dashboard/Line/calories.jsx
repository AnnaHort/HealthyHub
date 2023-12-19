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
import { faker } from '@faker-js/faker';

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

const Container = styled.div`
  max-width: 1200px;
  padding: 0 34px;
`;


const TitleContainer = styled.div`
display: flex;
align-items: center;
margin-top: 16px;
margin-bottom: 9px;
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

const CaloriesDashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Начинать отсчет с 0 на оси X
      },

      y: {
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
      },
    },
  };


  const labels = [];
  for (let i = 1; i <= 31; i++) {
    labels.push(i);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: 3000 })
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
   
  };
  return (
    <Container>
      <TitleContainer>
        <CaloriesTitle>Calories</CaloriesTitle>
        <CaloriesDesc>Average value: 1700 cal</CaloriesDesc>
      </TitleContainer>
      
        <Line options={options} data={data} />
     
    </Container>
  );
};

export default CaloriesDashboard;
