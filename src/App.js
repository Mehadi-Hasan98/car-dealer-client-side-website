import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Register from './components/Login/Register/Register';
import AddItem from './components/AddItem/AddItem';
import ManageItems from './components/ManageItems/ManageItems';
import ItemDetail from './components/ItemDetail/ItemDetail';
import MyItems from './components/MyItems/MyItems';
import Inventory from './components/Inventory/Inventory';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        }></Route>
        <Route path='/inventory' element={
          <Inventory></Inventory>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
           <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
           <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
