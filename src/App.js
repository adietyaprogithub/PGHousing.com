import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    // <div>
    //  <Register/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
