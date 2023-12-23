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
// import { faker } from '@faker-js/faker';

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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserInfo } from '../../../redux/userCurrentInfo/operations';
import { getUserInfo } from '../../../redux/userCurrentInfo/selectors';

const Container = styled.div`
  margin-left: 10px;
  overflow-y: auto;

  @media (min-width: 834px) {
   margin-left: unset;
    overflow-y: unset;
  }

  @media (min-width: 1440px){
    
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

const CaloriesDashboard = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector(getUserInfo)
  console.log(userInfo);

  useEffect(() => {
    
       dispatch(fetchUserInfo());
    
  }, [dispatch])


  const caloriesData = userInfo ? userInfo.user.calories : [];
  console.log(caloriesData)

  // if (calories && calories.length) {
    
  // }

const labels = Array.from({length: 31}, (_, index) => index + 1)

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

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: caloriesData,
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
        <CaloriesDesc>Average value: { }</CaloriesDesc>
      </TitleContainer>

      <ChartsContainer>
        <Line
          options={options}
          data={data}
          style={{ backgroundColor: '#0F0F0F', borderRadius: '12px', }}
        />
      </ChartsContainer>
    </Container>
  );
};

export default CaloriesDashboard;
