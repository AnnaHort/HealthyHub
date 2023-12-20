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
  padding-left: 10px;
  overflow-x: auto;
  margin-bottom: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 9px;
`;

const WaterTitle = styled.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  color: var(--color-primary-white);
  margin-right: 40px;
`;

const WaterDesc = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`;

const ChartsContainer = styled.div`
  border-radius: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  min-width: 676px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;


const WaterDashboar = () => {
  
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
           data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
           borderColor: 'rgb(255, 99, 132)',
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
         },
       ],
     };
    
    return (
      <Container>
        <TitleContainer>
          <WaterTitle>Water</WaterTitle>
          <WaterDesc>Average value: 1700 ml</WaterDesc>
        </TitleContainer>

        <ChartsContainer >
         
            <Line options={options} data={data} />
     
        </ChartsContainer>
      </Container>
    );
};

export default WaterDashboar;
