import './App.css';
import Home from "./components/Home"
import ParamsComponent from './components/ParamsComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />} path='/home' />
      <Route  element={<ParamsComponent />} path="/:word"  />
      <Route  element={<ParamsComponent />} path="/:word/:color/:bgCol"  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
