import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import YourActivity from './components/YourActivity/YourActivity';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            
          <Route path="/signin" element={<SharedLayout />}/>
          
          {/* розкоментувати */}
          {/* <Route path="/signup" element={<SharedLayout />}/> */}

          {/* видалити переде мерджем */}
          <Route path="/signup" element={<YourActivity />}/>

          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
