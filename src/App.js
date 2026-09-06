import './App.css';
import Nav from './nav';
import Findfood from './findfood'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from './menu';
import Contact from "./contact"
import Signin from './sign';
import Login from './login';
function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Findfood />} />
            <Route path="/menu" element={<Menu />}/>
            <Route path="/contact us" element={<Contact />}/>
            <Route path="/sign in"  element={<Signin />}/>
            <Route path="/logout"    element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;