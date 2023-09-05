import './App.css';
import {BrowserRouter, Routes, Route, Link} from'react-router-dom'
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote'
import UpdateNote from './components/UpdateNote'

function App() {
  return (
    <BrowserRouter>

    
    

    
    <div className="App">
      
      <h1>Notes</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create">Create</Link>


    </div>
    <Routes>
      <Route path='/' element={<AllNotes/>} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="notes/:id/edit" element={<UpdateNote />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
