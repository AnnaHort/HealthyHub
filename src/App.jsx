import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/welcomePage';
import SignInPages from './pages/SignInPages/SignInPages';
// import BodyParameters from './pages/BodyParameters/bodyParameters';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/signin" element={<SignInPages />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            {/* <Route
              path="/parameters"
              element={<BodyParameters />}
            ></Route> */}
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
