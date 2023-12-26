import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  DashboardForm,
  LabelDashboard,
  FieldStyled,
  OptionStyled,
} from './months.styled';

const MonthsDashboard = ({ selectedMonths, setMonth }) => {
  const getCurrentMonths = () => {
    const now = new Date();
    return now.getMonth();
  };

  const month = [
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

  const getLastYearMonths = () => {
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
    return months;
  };

  return (
    <Container>
      <Formik
        initialValues={{
          selectedMonths: selectedMonths,
        }}
        onSubmit={(values) => {
          console.log('Months:', values.selectedMonths);
        }}
      >
        <DashboardForm>
          <LabelDashboard htmlFor="selectedMonth">Months</LabelDashboard>
          <FieldStyled
            as="select"
            name="selectedMonths"
            onChange={(e) => {
              console.log(e.target.value);
              console.log(month.length);
              for (let i = 0; i < month.length; i++) {
                if (e.target.value == month[i]) {
                  console.log(1 + i + ' true');
                  return setMonth(i + 1);
                }
                console.log(i);
              }
            }}
          >
            {getLastYearMonths().map((month) => (
              <OptionStyled key={month} value={month}>
                {month}
              </OptionStyled>
            ))}
          </FieldStyled>
          <ErrorMessage name="height" component="div" />

          <div>
            <h3>{getCurrentMonths()}</h3>
          </div>
        </DashboardForm>
      </Formik>
    </Container>
  );
};

export default MonthsDashboard;
