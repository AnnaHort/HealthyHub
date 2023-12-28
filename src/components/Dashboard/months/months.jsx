import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  DashboardForm,
  LabelDashboard,
  FieldStyled,
  OptionStyled,
} from './months.styled';

const MonthsDashboard = ({ selectedMonths, setMonth }) => {

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
        </DashboardForm>
      </Formik>
    </Container>
  );
};

export default MonthsDashboard;
