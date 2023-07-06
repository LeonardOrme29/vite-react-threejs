import {useState, useEffect} from 'react'
import imgBanner1 from '../images/banner-muebleV2.png'
import imgBanner2 from '../images/textura-madera.jpg'
import imgBanner3 from '../images/pared.png'
import Products from '../components/Products'
import axios from 'axios'


function Home() {
  const [listaProductos,setListaProductos]=useState([]);
  useEffect(()=>{
    getProductos()
  },[])
  const getProductos= async ()=>{
    const res=await axios.get('http://localhost:3001/producto/cuadro2');
    setListaProductos(res.data);
  }
  return (
    <>
    {/*Inicio del Banner */}
      <div className='banner'>
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
      {/*Inicio del Banner a medida */}
      <div className='containerBannerCraft d-flex'>
        <div className='container-xxl d-flex'>
          <div className='infoBannerCraft d-flex flex-column justify-content-center'>
            <h2>CREA TU CUADRO</h2>
            <div className='sloganBannerCraft d-flex flex-column'>
              <div className='d-flex justify-content-between'>
                <h4>Adapta tu</h4>
                <h4 id='sloganLinedText'>arte al cuadro</h4>
              </div>
              <h4 id='sloganPropuse'>cuadro al arte</h4>
            </div>
            <button type="button" className="btn btn-outline-warning">Constrúyelo</button>
          </div>
          <div className='imgBannerCraft'></div>
        </div>
      </div>
      <div className='container-xl'>
        <div className='encabezadoProduct'>
          Nuestros Productos
        </div>
        <div className='d-flex flex-row flex-nowrap justify-content-between'>
          {listaProductos.map(producto=>(
          <Products img='gallery'pNombre={producto.nomProducto} pDesc={producto.descProducto} pCost={`S/${producto.precioProducto}`}/>
        ))}
          <a href='/product'><Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion qu' pCost='$19.90'/></a>
        </div>
      </div>
      <div className='container-xl'>
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
      </div>
    </>
  )
}

export default Home