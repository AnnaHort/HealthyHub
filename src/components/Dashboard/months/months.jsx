import { Formik, ErrorMessage } from 'formik';
import {
  Container,
    DashboardForm,
  LabelDashboard,
  FieldStyled,
  OptionStyled,
} from './months.styled';

const MonthsDashboard = () => {
    const getCurrentMonths = () => {
        const now = new Date();
        return now.getMonth() + 1;
    }

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
  }
  
    return (
      <Container>
        <Formik
          initialValues={{
            selectedMonths: getCurrentMonths(),
          }}
          onSubmit={(values) => {
            console.log('Months:', values.selectedMonths);
          }}
        >
          <DashboardForm>
            <LabelDashboard htmlFor="selectedMonth">Months</LabelDashboard>
            <FieldStyled as="select" name="selectedMonths">
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
}

export default MonthsDashboard;