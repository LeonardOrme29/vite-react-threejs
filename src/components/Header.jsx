import logo from '../images/logoRow.png'
import '../estilos/header.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../features/auth/authSlice.js'
function Header() {
  const[showSearchNav,setShowSearchNav]=useState(false)
  const[showToggleBar,setShowToggleBar]=useState(false)
  const[querySearch,setQuerySearch]=useState('');
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
  //show search an toggle superpositions
  const dispatch=useDispatch();
  function logout() {
    dispatch(logOut({}))
  }
  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(querySearch);
  }
  //Put text in the search inputs
  useEffect(()=>{
    document.getElementById('searchInputDesktop').value=querySearch;
    document.getElementById('searchInputMobile').value=querySearch;
  },[showSearchNav,showToggleBar])
  return (
    <>
    <div className='headerMainContainer d-flex flex-column justify-content-center'>
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
                <Link>A medida</Link>
              </li>
              <li className='navItem'>
                <Link>Galeria</Link>
              </li>
              <li className='navItem'>
                <Link>Regalo</Link>
              </li>
              <li className='navItem'>
                <Link>Colecciones</Link>
              </li>
              <li className='navItem'>
                <Link>Inspiración</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='iconsNavContainer d-flex align-items-center'>
          <button onClick={()=>{setShowSearchNav(!showSearchNav);setShowToggleBar(false)}}>
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
          <button onClick={()=>{setShowToggleBar(!showToggleBar);setShowSearchNav(false)}}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
        <div className={`containerMobileNav ${showToggleBar ? 'show' : ''}`}>
          <div className='iconsContainerMobileNav pb-2'>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input id='searchInputMobile' className="searchBar mobile me-2" placeholder='Buscar' onChange={(e)=>{setQuerySearch(e.target.value)}} type="search"  aria-label="Search"/>
              <button type="submit" onClick={(e)=>{handleSearchSubmit(e.target.value)}}><i className="bi bi-search"></i></button>
            </form>
          </div>
          <Link to={'/'} className='itemMobileNav d-flex align-items-center justify-content-end'><p>A medida</p></Link>
          <Link to={'/'} className='itemMobileNav d-flex align-items-center justify-content-end'><p>Galería</p></Link>
          <Link to={'/'} className='itemMobileNav d-flex align-items-center justify-content-end'><p>Regalo</p></Link>
          <Link to={'/'} className='itemMobileNav d-flex align-items-center justify-content-end'><p>Colecciones</p></Link>
          <Link to={'/'} className='itemMobileNav d-flex align-items-center justify-content-end'><p>Inspiración</p></Link>
        </div>
    </div>
    <div className={`containerSearchNav ${showSearchNav? 'show' : ''} py-2`}>
      <form className='d-flex justify-content-center'>
        <input id='searchInputDesktop' className='searchBar' type={'text'} placeholder='Buscar' onChange={(e)=>{setQuerySearch(e.target.value)}}/>
        <button className='btn btn-danger' type="submit" onClick={(e)=>{handleSearchSubmit(e.target.value)}}>Buscar</button>
      </form>
    </div>
  </>
  )
}

export default Header