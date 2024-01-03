import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/UI/Pages/MainPage';
import Episodes from './components/UI/Pages/Episodes';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/episodes" element={<Episodes />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
