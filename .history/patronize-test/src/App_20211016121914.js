import logo from './logo.svg';
import { Route } from 'react-roter-dom';
import './App.css';
import Onboarding from './components/Onboarding';

function App() {
  return <Route path='/' components={Onboarding} />;
}

export default App;
