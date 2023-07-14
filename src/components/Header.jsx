import logo from '../images/logoRow.png'
import '../estilos/header.css'
import { Link } from 'react-router-dom'
import { useRef,useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../features/auth/authSlice.js'
function Header() {
  const[showSearchNav,setShowSearchNav]=useState(false)
  const[showToggleBar,setShowToggleBar]=useState(false)
  const[showUserOptions,setShowUserOptions]=useState(false)
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


  const toggleBarRef = useRef(null);
  const toggleBarRef2 = useRef(null);
  const userIconRef=useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (toggleBarRef.current && !toggleBarRef.current.contains(event.target) && !toggleBarRef2.current.contains(event.target) && !userIconRef.current.contains(event.target) ) {
        setShowToggleBar(false);
        setShowUserOptions(false)
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleToggerClick = () => {
    setShowToggleBar(false);
  };

  return (
    <>
    <div className='headerMainContainer d-flex flex-column justify-content-center'>
      <div className='containerHeader container-xxl d-flex align-items-center'>
        <div className='containerLogoNav d-flex'>
          <Link to={'/'}>
            <div className='containerImgLogo'>
              <img className='imgLogo' src={logo}/>
            </div>
          </Link>
          <nav className="navContainer navbar navbar-expand-md">
            <ul className='navListItem d-flex align-items-center'>
              <li className='navItem'>
                <Link to={'/craft'}>A medida</Link>
              </li>
              <li className='navItem'>
                <Link to={'/gallery'}>Galeria</Link>
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
          <button onClick={()=>{setShowSearchNav(!showSearchNav);setShowUserOptions(false);setShowToggleBar(false)}}>
            <i className="bi bi-search responsiveIconOff"></i>
          </button>
          <i className="bi bi-cart"></i>
          {usuario!=null ? (
            <div className="btn-group">
              <button ref={userIconRef} type="button" className={`navItemBottom ${!showUserOptions ? 'noDropdown' : 'show'}`} data-bs-toggle="dropdown" onClick={()=>{setShowUserOptions(!showUserOptions);setShowToggleBar(false);setShowSearchNav(false)}} aria-expanded="false">
                <i className='user bi bi-person-circle img-responsive responsiveIconOff' alt="dropdown image" />
              </button>
              <ul className={`dropdown-menu dropdown-menu-end ${!showUserOptions ? 'noDropdown' : 'show'}`}>
                <li><button className="dropdown-item" type="button"><Link to={'/'}>Mis Pedidos</Link></button></li>
                <li><button className="dropdown-item" type="button"><Link to={'/'}>Configuración</Link></button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>logout()}>Logout</button></li>
              </ul>
            </div>
          ):( 
                  <div className="btn-group">
                    <button ref={userIconRef} type="button" className={`navItemBottom ${!showUserOptions ? 'noDropdown' : 'show'}`} data-bs-toggle="dropdown" onClick={()=>{setShowUserOptions(!showUserOptions);setShowToggleBar(false);setShowSearchNav(false)}} aria-expanded="false">
                      <i className='user bi bi-person-circle img-responsive responsiveIconOff' alt="dropdown image" />
                    </button>
                    <ul className={`dropdown-menu dropdown-menu-end ${!showUserOptions ? 'noDropdown' : 'show'}`}>
                      <li><button className="dropdown-item" type="button"><Link className="dropdown-item" to={'/login'}>Iniciar Sesión</Link></button></li>
                      <li><button className="dropdown-item" type="button"><Link className="dropdown-item" to={'/signup'}>Registrarse</Link></button></li>
                    </ul>
                  </div>
            ) }
          <button ref={toggleBarRef} className='hamburgerButton' onClick={()=>{setShowToggleBar(!showToggleBar);setShowSearchNav(false);setShowUserOptions(false)}}>
            <div className={`hamburgerContainer ${showToggleBar ? 'active' : ''}`}>
              <span className='bar topBar'></span>
              <span className='bar middleBar'></span>
              <span className='bar bottomBar'></span>
            </div>
          </button>
        </div>
      </div>
        <div ref={toggleBarRef2} className={`containerMobileNav ${showToggleBar ? 'show' : ''}`}>
          <div className='iconsContainerMobileNav pb-2' style={{paddingRight:'1em'}}>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input id='searchInputMobile' className="searchBar mobile me-2" placeholder='Buscar' onChange={(e)=>{setQuerySearch(e.target.value)}} type="search"  aria-label="Search"/>
              <button type="submit" onClick={(e)=>{handleSearchSubmit(e.target.value)}}><i className="bi bi-search"></i></button>
            </form>
          </div>
          <div className='mobileMenuBar'>
          <Link to={'/craft'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>A medida</p></Link>
          <Link to={'/gallery'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>Galería</p></Link>
          <Link to={'/'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>Regalo</p></Link>
          <Link to={'/'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>Colecciones</p></Link>
          <Link to={'/'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>Inspiración</p></Link>
          </div>
          <div className='mobileBarUserOptions'>
            <Link to={'/login'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>Iniciar Sesión</p></Link>
            <Link to={'/signup'} onClick={handleToggerClick} className='itemMobileNav d-flex align-items-center justify-content-end'><p className='mobileOptionsNav'>Registrarse</p></Link>
          </div>
          <div className='mobileSocialMediaContainer'>
            <div className='iconSocialMediaMobile d-flex justify-content-between'>
              <Link to={'https://www.instagram.com/'} target='_blank' rel="noopener noreferrer"><i className="bi bi-instagram"></i></Link>
              <Link to={'https://www.facebook.com/'} target='_blank' rel="noopener noreferrer"><i className="bi bi-facebook"></i></Link>
              <Link to={'https://www.tiktok.com'} target='_blank' rel="noopener noreferrer"><i className="bi bi-tiktok"></i></Link>
              <Link to={'https://web.telegram.org'} target='_blank' rel="noopener noreferrer"><i className="bi bi-telegram"></i></Link>
            </div>
          </div>
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