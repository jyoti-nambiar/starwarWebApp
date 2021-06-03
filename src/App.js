import './App.css';
import Home from './components/Home';
import {Route, BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
     <AppRouter />
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
