import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import SignUpPage from './components/SignUpForm/SignUpForm';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/signin" element={<SharedLayout />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
