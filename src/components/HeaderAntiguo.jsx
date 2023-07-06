import {useState} from 'react';
import logo from '../images/logoRow.png'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logOut } from '../features/auth/authSlice.js'


const Header=()=>{
  const[show,setShow]=useState(false)
  const authState=useSelector(state=>state.auth)
  let usuario;
  if(authState.user!=null){
    usuario=authState.user;
  }
  const dispatch=useDispatch();
  function logout() {
    dispatch(logOut({}))
  }
  return (
    <>
      <header className='d-flex flex-column py-2'>
        <div className='container-xxl'>
          <div className='row'>
            {/* LOGO */}
            <div className='col-2 d-flex align-items-center justify-content-start'>
              <Link to={'/'}>
                <img className='logo img-fluid' alt='logoTaal' src={logo}/>
              </Link>
            </div>
            {/* ACCESO DIRECTOS */}
            <div className='nav col-8 d-inline-flex flex-row align-items-center'>
              <Link className='nav-item d-inline-block' to={'/craft'}><p>A Medida</p></Link>
              <Link className='nav-item d-inline-block' to={'/'}><p>Galería</p></Link>
              <Link className='nav-item d-inline-block' to={'/'}><p>Regalos</p></Link>
              <Link className='nav-item d-inline-block' to={'/coleccion'}><p>Colecciones</p></Link>
              <Link className='nav-item d-inline-block' to={'/'}><p>Inspiración</p></Link> 
            </div>

            {/*BOTONES DE BUSCAR, CARRITO Y USUARIO */}
            <div className='col-2 d-flex flex-column align-items-end justify-content-center'>
              <div className='d-flex flex-row align-items-center'>
                <button className='navItem navItemBotton' type='button' onClick={()=>setShow(!show)}>
                  <i className="bi bi-search"></i>
                </button>
                <div className='cartIcon navItem'>
                  <Link to={'/'}>
                    <i className="bi bi-cart"></i>
                  </Link>
                </div>
                {
                  usuario!=null ? (<div className="dropdown">
                  <button className="navItem navItemBotton"  type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='user bi bi-person-circle img-responsive' alt="dropdown image" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/'}>Mis Pedidos</Link></li>
                    <li><Link className="dropdown-item" to={'/'}>Configuración</Link></li>
                    <li><Link className="dropdown-item" to={'/'} onClick={()=>logout()}>Logout</Link></li>
                  </ul>
                </div>):(<div className="dropdown">
                  <button className="navItem navItemBotton"  type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='user bi bi-person-circle img-responsive' alt="dropdown image" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/login'}>Iniciar Sesion</Link></li>
                    <li><Link className="dropdown-item" to={'/signup'}>Registrarse</Link></li>
                  </ul>
                </div>)
                }
              </div>
            </div>
          </div>
        </div>
        {
      show ?(<div className='py-2'>
        <div className='d-flex justify-content-center'>
          <input className='searchBar' type={'text'} placeholder='Buscar'/>
          <button className='btn btn-danger' type='button'>Buscar</button>
        </div>
      </div>):(<></>)}
      </header>
    </>
  )
}
export default Header

