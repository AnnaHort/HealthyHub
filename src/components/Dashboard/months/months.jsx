
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
        const months = [];
        for (let i = 0; i <= 12; i++){
            months.push(i)
        }
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
              {getLastYearMonths().map((month) => {
                <OptionStyled key={month} value={month}>
                  {month}
                </OptionStyled>;
              })}
            </FieldStyled>
            <ErrorMessage name="height" component="div" />
            <svg width="16" height="16" fill='white'>
              <use href="../../../img/dashboard/symbol-defs.svg#icon-arrow-right"></use>
            </svg>
            <div>
              <h3>{getCurrentMonths()}</h3>
            </div>
          </DashboardForm>
        </Formik>
      </Container>
    );
}

export default MonthsDashboard;