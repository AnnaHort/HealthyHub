import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import WelcomePage from './pages/WelcomePage/welcomePage';
import ButtonSignUp from './components/WelcomePage/Button/buttonSignUp';
import ButtonSignIn from './components/WelcomePage/Button/buttonSignIn';

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
            <Route path="/signin" element={<SharedLayout />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/welcome" element={<WelcomePage />}>
              <Route path="signup" element={<ButtonSignUp />} />
              <Route path="signin" element={<ButtonSignIn />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
