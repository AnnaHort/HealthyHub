import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
