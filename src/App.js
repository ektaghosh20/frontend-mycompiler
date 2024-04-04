import './App.css';
import Mainpage from './components/Mainpage';
import Head from './components/Head'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
document.body.style = 'background: rgb(220, 220, 220);';

function App() {
  return (
    <>
    <Router>
      <Head/>
          <Routes>
            <Route exact path='/' element={<Mainpage/>}></Route> 
          </Routes>
    </Router>
    
    </>
    
  );
}

export default App;


