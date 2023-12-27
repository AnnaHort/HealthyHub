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
    return now.getMonth() + 1;
  };

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
            // отрисовываем текущее состояние
            value={selectedMonths}
            onChange={(e) => {
              // передаём порядковый номер месяца
              setMonth(Number(e.target.value));
            }}
          >
            {getLastYearMonths().map((month, idx) => (
              // отрисовываем числовое значение value
              <OptionStyled key={month} value={idx + 1}>
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
