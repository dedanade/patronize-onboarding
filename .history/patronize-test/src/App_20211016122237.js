import logo from './logo.svg';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Onboarding from './components/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Onboarding} />
      <Redirect to='/' />
    </BrowserRouter>
  );
}

export default App;
