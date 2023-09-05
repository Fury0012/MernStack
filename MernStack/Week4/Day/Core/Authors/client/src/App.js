import './App.css';
import Authors from './components/Authors';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Authors />} />
        <Route path='/create' element={<CreateAuthor />} />
        <Route path='authors/update/:id' element={<UpdateAuthor />} />
          
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
