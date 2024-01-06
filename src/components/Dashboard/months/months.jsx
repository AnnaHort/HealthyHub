import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ButtonBack,
  DropdownButton,
  UseSelect,
  SvgSelectDown,
  DropdownList,
  DropdownListItem,
  SelectedMonthDisplay,
} from './months.styled';
import Icons from '../../../img/dashboard/symbol-defs.svg';

const MonthsDashboard = ({ selectedMonth, setMonth }) => {
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

  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (idx) => {
    setMonth(idx + 1);
    setIsDropdownOpen(false);
  };

  return (
    <Container>
      <ButtonBack onClick={() => navigate('/main')}>
        <UseSelect xlinkHref={`${Icons}#icon-arrow-right`} />
      </ButtonBack>
      <DropdownButton onClick={handleButtonClick}>
        Months
        <SvgSelectDown $isDropdownopen={isDropdownOpen}>
          <UseSelect xlinkHref={`${Icons}#icon-arrow-down`} />
        </SvgSelectDown>
      </DropdownButton>
      {isDropdownOpen && (
        <DropdownList>
          {months.map((month, idx) => (
            <DropdownListItem
              key={month}
              onClick={() => handleMonthSelect(idx)}
            >
              {month}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
      <SelectedMonthDisplay>
        Selected Month: {selectedMonth}
      </SelectedMonthDisplay>
    </Container>
  );
};

export default MonthsDashboard;
