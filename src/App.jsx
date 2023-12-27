import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader  from './components/Loader/Loader';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from './components/SharedLayout/SharedLayout';

const WelcomePage = lazy(() => import('./pages/WelcomePage/welcomePage')); 
const SignInPages = lazy(() => import('./pages/SignInPages/SignInPages')); 
const ForgotPasswordPage = lazy(() => import('./components/ForgotPasswordPage/ForgotPasswordPage')); 
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage')); 

const MainPage = lazy(() => import('./pages/MainPage/MainPage')); 
const DashboardPage = lazy(() => import('./pages/DashboardPage/dashboardPage')); 
const ProfileSettingsPage = lazy(() => import('./pages/ProfileSettingsPage/ProfileSettingsPage')); 
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage')); 
const RecommendedFoodPage = lazy(() => import('./components/RecommendedFoodPage/recommendedFoodPage')); 
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));


import selectIsLoggedIn, { selectIsLoading } from './redux/auth/authSelectors';
import { selectIsLoadingDashboard } from './redux/dashboardPage/dashboardSelector';
import { getIsLoadingRecommendedFood } from './redux/recommendedFood/selector';
import { selectIsLoadingUpdate } from './redux/updateUser/updateSelectors';
import { getIsLoadingUserStats } from './redux/userStatsDay/selectors';
import { fetchCurentUser } from './redux/auth/authOperations';


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const LoadingAuth = useSelector(selectIsLoading);
  const LoadingDashboard = useSelector(selectIsLoadingDashboard);
  const LoadingRecFood = useSelector(getIsLoadingRecommendedFood);
  const LoadingUpdUser = useSelector(selectIsLoadingUpdate);
  const LoadingUserStats = useSelector(getIsLoadingUserStats);

  useEffect(() => {
    dispatch(fetchCurentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/welcome"
                component={<WelcomePage />}
              />
            }
          />

          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
            }
          />

          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignUpPage />} />
            }
          />

          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignInPages />} />
            }
          />

          <Route
            path="/main"
            element={
              <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<DashboardPage />}
              />
            }
          />

          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/welcome" component={<DiaryPage />} />
            }
          />

          <Route
            path="/recommended-food"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<RecommendedFoodPage />}
              />
            }
          />

          <Route
            path="/settings"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<ProfileSettingsPage />}
              />
            }
          />

          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {(LoadingAuth ||
        LoadingDashboard ||
        LoadingRecFood ||
        LoadingUpdUser ||
        LoadingUserStats) && <Loader />}
    </>
  );
}
export default App;
