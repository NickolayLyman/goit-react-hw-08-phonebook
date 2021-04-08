import { Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import Container from './components/Container';
import PrivateRoute from './components/Routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import PublicRoute from './components/Routes/PublicRoute';
import authOperations from './redux/auth/auth-operation';
import AppBar from './components/PageHeader/AppBar';
import 'react-toastify/dist/ReactToastify.css';

const HomePageView = lazy(() => import('./views/HomePageView'));
const RegistrationView = lazy(() => import('./views/RegistrationView'));
const LoginFormView = lazy(() => import('./views/LoginFormView'));
const PhoneContactsView = lazy(() => import('./views/PhoneContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
      />
      <AppBar />
      <Switch>
        <Suspense fallback={<h2>Loading....</h2>}>
          <PublicRoute exact path="/">
            <HomePageView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegistrationView />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <LoginFormView />
          </PublicRoute>
          <PrivateRoute exact path="/contacts" redirectTo="/login">
            <PhoneContactsView />
          </PrivateRoute>
          <Redirect to="/login" />
        </Suspense>
      </Switch>
    </Container>
  );
}
