import logo from './logo.svg';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Onboarding from './components/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' components={Onboarding} />
    </BrowserRouter>
  );
}

export default App;
