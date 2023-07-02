
import './App.css';
import { lazy,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home';
import Producto from './pages/Producto';
//import Craft from './pages/Craft'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';



function App() {
  const Craft=lazy(()=>import('./pages/Craft'))
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'100vh', width:'100vw'}}>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only"></span>
          </div>
          <p>Loading...</p>
        </div>}>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Producto/>}/>
          <Route path='craft' element={<Craft/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
