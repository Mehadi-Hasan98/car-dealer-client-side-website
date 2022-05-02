import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
