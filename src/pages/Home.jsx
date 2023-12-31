import {useState, useEffect} from 'react'
import Products from '../components/Products'
import axios from 'axios'
import imagenes from '../exports/imgBanner.js'
import imagenesMobile from '../exports/imgBannerMobile.js'
import imgBannerCraft from '../images/bannerCraft.png'
import { Link } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'
import SecondProductSlider from '../components/SecondProductSlider'


function Home() {
  const [imgBanner1, imgBanner2, imgBanner3] = imagenes;
  const [imgBannerMobile1,imgBannerMobile2,imgBannerMobile3]=imagenesMobile
  return (
    <>
      {/*Inicio del Banner 1920 */}
      <div className='bannerDesktop'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imgBanner1} className="d-block w-100" style={{maxHeight:'600px'}} alt="Banner nro 1"/>
            </div>
            <div className="carousel-item">
              <img src={imgBanner2} className="d-block w-100" style={{maxHeight:'600px'}} alt="Banner nro 2"/>
            </div>
            <div className="carousel-item">
              <img src={imgBanner3} className="d-block w-100" style={{maxHeight:'600px'}} alt="Banner nro 3"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*Inicio del Banner Mobile */}
      <div className='bannerMobile'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imgBannerMobile1} className="d-block w-100" style={{maxHeight:'600px'}} alt="Banner nro 1"/>
            </div>
            <div className="carousel-item">
              <img src={imgBannerMobile2} className="d-block w-100" style={{maxHeight:'600px'}} alt="Banner nro 2"/>
            </div>
            <div className="carousel-item">
              <img src={imgBannerMobile3} className="d-block w-100" style={{maxHeight:'600px'}} alt="Banner nro 3"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*Inicio del Banner a medida */}
      <div className='containerBannerCraft d-flex'>
        <div className='container-xxl d-flex justify-content-center'>
          <div className='d-flex justify-content-center' style={{height:'100%',flexGrow:'0.15'}}>
            <div className='infoBannerCraft d-flex flex-column justify-content-center'>
              <h2>CREA TU CUADRO</h2>
              <div className='sloganBannerCraft d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                  <h4>Adapta tu</h4>
                  <h4 id='sloganLinedText'>arte al cuadro</h4>
                </div>
                <h4 id='sloganPropuse'>cuadro al arte</h4>
              </div>
              <button type="button" className="buttonBannerCraft">Constrúyelo</button>
            </div>
          </div>
          <div className='imgBannerCraft d-flex justify-content-center'>
            <img src={imgBannerCraft}/>
          </div>
        </div>
      </div>
{/* ------------TYPE OF FRAMES------------ */}
      <div className='desktoptypeFrameContainer container-xxl'>
        <div className='typeFrameContainer d-flex flex-column align-items-center'>
          <h2>Tipos de Cuadros</h2>
          <div className='flat TypeContainer d-flex'>
            <div className='flat InfoContainer d-flex flex-column'>
              <h3>Plano</h3>
              <p>El cuadro plano es un cuadro pensado para aquellas personas que quieran enmarcar un momento para siempre... </p>
              <button type="button" className="buttonBannerCraft">Ver más</button>
            </div>
            <div className='imgTypeContainer'>
              <img src={imgBannerCraft}/>
            </div>
          </div>

          <div className='box TypeContainer d-flex'>
            <div className='imgTypeContainer'>
              <img src={imgBannerCraft}/>
            </div>
            <div className='box InfoContainer d-flex flex-column'>
              <h3>Box</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
              <button type="button" className="buttonBannerCraft">Ver más</button>
            </div>
          </div>
          {/* DOUBLE FRAME AND GLASS */}
          <h3 className='doublesTypeHeader'>Dobles</h3>
          <div className='doubleTypeContainer d-flex'>
            <div className='doubleGlass TypeConatiner d-flex flex-column'>
              <div className='imgTypeContainer'>
                <img src={imgBannerCraft}/>
              </div>
              <div className='InfoContainer'>
                <h3>Doble Vidrio</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
                <button type="button" className="buttonBannerCraft">Ver más</button>
              </div>
            </div>
            <div className='doubleFrame TypeConatiner d-flex flex-column'>
              <div className='imgTypeContainer'>
                <img src={imgBannerCraft}/>
              </div>
              <div className='InfoContainer'>
                <h3>Doble Marco</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
                <button type="button" className="buttonBannerCraft">Ver más</button>
              </div>
            </div>
          </div>

          {/* DOBLE CANVAS */}
          <h3 className='doublesTypeHeader'>Canvas</h3>
          <div className='doubleTypeContainer d-flex'>
            <div className='doubleGlass TypeConatiner d-flex flex-column'>
              <div className='imgTypeContainer'>
                <img src={imgBannerCraft}/>
              </div>
              <div className='InfoContainer'>
                <h3>Enmarcado</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
                <button type="button" className="buttonBannerCraft">Ver más</button>
              </div>
            </div>
            <div className='doubleFrame TypeConatiner d-flex flex-column'>
              <div className='imgTypeContainer'>
                <img src={imgBannerCraft}/>
              </div>
              <div className='InfoContainer'>
                <h3>Marco Flotante</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
                <button type="button" className="buttonBannerCraft">Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE TYPE PRODUCTS */}
      <div className='mobileContainer container-xxl flex-column align-items-center'>
        <h2>Tipos de Marco</h2>
        <div className='mobileTypeWrap d-flex justify-content-center' style={{width:'100%',columnGap:'1em',rowGap:'1em'}}>
          <div className='mobileTypeContainer d-flex flex-column align-items-center'>
            <div className='mobileImgTypeContainer'>
              <div className='imgMobileType'></div>
            </div>
            <div className='mobileInfoTypeContainer'>
              <h3>Plano</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
              <button type="button" className="buttonBannerCraft">Ver más</button>
            </div>
          </div>
          <div className='mobileTypeContainer d-flex flex-column align-items-center'>
            <div className='mobileImgTypeContainer'>
              <div className='imgMobileType'></div>
            </div>
            <div className='mobileInfoTypeContainer'>
              <h3>Box</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim erat eu est fermentum, vel hendrerit sem consectetur. Integer tincidunt, velit a efficitur viverra, dui justo tristique leo, eu convallis elit enim eget dui. Sed bibendum sem a efficitur fermentum. </p>
              <button type="button" className="buttonBannerCraft">Ver más</button>
            </div>
          </div>
        </div>
      </div>
      <div className='ourProductsContainer'>
        <div className='container-xxl d-flex flex-column align-items-center'>
          <div className='encabezadoOurProduct'>
            Nuestros Productos
          </div>
          <ProductSlider/>
        </div>
      </div>
{/* ------------PRODUCTS--------------- */}
      {/* <div className='ourProductsContainer'>
        <div className='container-xxl d-flex flex-column align-items-center'>
          <div className='encabezadoProduct'>
            Nuestros Productos
          </div>
          <div className='d-flex' style={{width:'100%',height:'100%'}}>
            <div className='ourProductsControl d-flex align-items-center justify-content-center'>
              <i className="bi bi-caret-left"></i>
            </div>
            <div className='d-flex flex-row justify-content-start' style={{columnGap:'1em'}}>
              <Link to={'/product'}><Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion del porducto cuadro doble marco' pCost='S/19.90'/></Link>
              {listaProductos.slice(0, 4).map((producto) => (
                <Products key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                pDesc={producto.descProducto} 
                pCost={`S/${producto.precioProducto}`}/>
              ))}
            </div>
            <div className='ourProductsControl d-flex align-items-center justify-content-center'>
              <i className="bi bi-caret-right"></i>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='container-xl'>
        <div className='itemsButton'>
          <button className='btn btn-primary'>Planos</button>
          <button className='btn btn-primary'>Box</button>
          <button className='btn btn-primary'>Doble Vidrio</button>
        </div>
        <div className='items-container'>
          {listaProductos.map(producto=>(
            <Products img='gallery'pNombre={producto.nomProducto} pDesc={producto.descProducto} pCost={`S/${producto.precioProducto}`}/>
          ))}
        </div>
      </div> */}
    </>
  )
}

export default Home