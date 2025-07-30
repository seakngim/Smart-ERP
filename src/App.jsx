import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import ForgotPasswordForm from './Components/ForgotPasswordForm';
import SignupForm from './Components/SignupForm';
import DashboardAccounting from './Components/Accounting/Dashboard';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard-accounting" element={<DashboardAccounting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
