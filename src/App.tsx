import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import MainPage from './pages/MainPage';
import ReportReceptionPage from './pages/ReportReceptionPage';
import ReportProcessPage from './pages/ReportProcessPage';
import useAuthStore from './store/useAuthStore';
import { useEffect } from 'react';

function App() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      if (window.location.pathname !== '/login')
        window.location.href = '/login';
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate replace to="/user/list" />} />
          <Route path="user/list" element={<UserListPage />} />
          <Route path="report/reception" element={<ReportReceptionPage />} />
          <Route path="report/process" element={<ReportProcessPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
