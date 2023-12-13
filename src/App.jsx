import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
