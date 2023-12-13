import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* сюди поміщаємо сторінки які рендеряться відносно - / */}
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
