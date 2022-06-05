import './App.css';
import Content from './component/Content';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './component/Menu';
import Favorites from './component/Favorites';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
