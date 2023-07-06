import logo from '../images/logoRow.png'
import '../estilos/header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../features/auth/authSlice.js'
function Header() {
  const[showSearchNav,setShowSearchNav]=useState(false)
  const[showToggleBar,setShowToggleBar]=useState(false)
  const authState=useSelector(state=>state.auth)
  const rootElement = document.querySelector('#mainRoot');
  if (showToggleBar) {
    rootElement.style.overflow = 'hidden';
  } else {
    rootElement.style.overflow = 'auto';
  }
  let usuario;
  if(authState.user!=null){
    usuario=authState.user;
  }
  const dispatch=useDispatch();
  function logout() {
    dispatch(logOut({}))
  }
  return (
    <header className='d-flex flex-column'>
      <div className='containerHeader container-xl d-flex align-items-center'>
        <div className='containerLogoNav d-flex'>
          <Link to={'/'}>
            <div className='containerImgLogo'>
              <img className='imgLogo' src={logo}/>
            </div>
          </Link>
          <nav className="navContainer navbar navbar-expand-md">
            <ul className='navListItem d-flex align-items-center'>
              <li className='navItem'>
                A medida
              </li>
              <li className='navItem'>
                Galeria
              </li>
              <li className='navItem'>
                Regalo
              </li>
              <li className='navItem'>
                Colecciones
              </li>
              <li className='navItem'>
                Inspiración
              </li>
            </ul>
          </nav>
        </div>
        <div className='iconsNavContainer d-flex align-items-center'>
          <button onClick={()=>setShowSearchNav(!showSearchNav)}>
            <i className="bi bi-search responsiveIconOff"></i>
          </button>
          <i className="bi bi-cart responsiveIconOff"></i>
          {usuario!=null ? (<div className="dropdown">
                  <button className="navItemBotton"  type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='user bi bi-person-circle img-responsive responsiveIconOff' alt="dropdown image" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/'}>Mis Pedidos</Link></li>
                    <li><Link className="dropdown-item" to={'/'}>Configuración</Link></li>
                    <li><Link className="dropdown-item" to={'/'} onClick={()=>logout()}>Logout</Link></li>
                  </ul>
                </div>):(<div className="dropdown">
                  <button className="navItemBotton"  type='button' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='user bi bi-person-circle img-responsive responsiveIconOff' alt="dropdown image" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={'/login'}>Iniciar Sesion</Link></li>
                    <li><Link className="dropdown-item" to={'/signup'}>Registrarse</Link></li>
                  </ul>
                </div>)}
          <button onClick={()=>setShowToggleBar(!showToggleBar)}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
      {showSearchNav ? (<div className='containerSearchNav py-2'>
        <div className='d-flex justify-content-center'>
          <input className='searchBar' type={'text'} placeholder='Buscar'/>
          <button className='btn btn-danger' type='button'>Buscar</button>
        </div>
      </div>):(<></>)}
      {
          showToggleBar?(
          <div className='containerMobileNav'>
            <Link to={'/'} className='itemMobileNav'>A medida</Link>
            <Link to={'/'} className='itemMobileNav'>Galería</Link>
            <Link to={'/'} className='itemMobileNav'>Regalo</Link>
            <Link to={'/'} className='itemMobileNav'>Colecciones</Link>
            <Link to={'/'} className='itemMobileNav'>Inspiración</Link>
            <div className='iconsMobileNav'>

            </div>
          </div>
          ):(<></>)
      }
    </header>
  )
}

export default Header