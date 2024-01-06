import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContainerSelect,
  BtnWrapper,
  WrapperBtnAndIcon,
  SvgSelectLeft,
  UseSelect,
  ButtonSelect,
  SvgSelectDown,
  WrapperSelect,
  LabelSelect,
  InputSelect,
  TextSelect,
} from './months.styled'; // Подставьте ваши стили

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
  const wrapperRef = useRef(null);

  const handleMonthSelect = (selected) => {
    setMonth(selected);
    setIsDropdownOpen(false);
  };

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ContainerSelect>
      <BtnWrapper ref={wrapperRef}>
        <WrapperBtnAndIcon>
          <SvgSelectLeft onClick={() => navigate('/main')}>
            <UseSelect />
          </SvgSelectLeft>
          <ButtonSelect onClick={handleButtonClick}>
            Months{' '}
            <SvgSelectDown $isdropdownopen={isDropdownOpen}>
              <UseSelect />
            </SvgSelectDown>
            {isDropdownOpen && (
              <WrapperSelect>
                {months.map((month) => (
                  <LabelSelect
                    key={month}
                    value={month}
                    className="radio-label"
                    onClick={() => handleMonthSelect(month)}
                  >
                    <InputSelect
                      name="month"
                      type="radio"
                      value={month}
                      checked={selectedMonth === month}
                    />
                    {month}
                  </LabelSelect>
                ))}
              </WrapperSelect>
            )}
          </ButtonSelect>
        </WrapperBtnAndIcon>
        <TextSelect>{selectedMonth}</TextSelect>
      </BtnWrapper>
    </ContainerSelect>
  );
};

export default MonthsDashboard;
