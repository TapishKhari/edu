
import './App.css';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import {Body}  from './components/Body/Body';
import {Bodysuccess} from './components/Body-success/Bodysuccess';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/success" element={<Bodysuccess/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
