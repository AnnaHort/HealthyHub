import { Formik, useFormikContext } from 'formik';

import {
  StyledFormControl,
  StyledInputLabel,
  StyledSelect,
  StyledMenuItem,
} from './months.styled';

const MonthsDropdown = ({ setMonth, monthNames }) => {
  const formik = useFormikContext();

  return (
    <StyledFormControl>
      <StyledInputLabel id="selectedMonthLabel">Months</StyledInputLabel>
      <StyledSelect
        labelId="selectedMonthLabel"
        id="selectedMonths"
        name="selectedMonths"
        value={formik.values.selectedMonths}
        onChange={(e) => {
          const selectedValue = e.target.value;
          formik.setFieldValue('selectedMonths', selectedValue);
          const selectedIndex = monthNames.indexOf(selectedValue);
          setMonth(selectedIndex + 1);
        }}
        label="Months"
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'var(--color-primary-black-2)',
              minWidth: '212px',
              height: '144px',

              boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              '& .MuiMenuItem-root': {},
            },
          },
        }}
      >
        {monthNames.map((month) => (
          <StyledMenuItem key={month} value={month}>
            {month}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

const MonthsDashboard = ({ selectedMonths, setMonth }) => {
  const getCurrentMonth = () => {
    const now = new Date();
    return now.getMonth();
  };

  const monthNames = [
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

  return (
    <Formik
      initialValues={{
        selectedMonths: selectedMonths || getCurrentMonth(),
      }}
      onSubmit={(values) => {
        console.log('Months:', values.selectedMonths);
      }}
    >
      <MonthsDropdown setMonth={setMonth} monthNames={monthNames} />
    </Formik>
  );
};

export default MonthsDashboard;
