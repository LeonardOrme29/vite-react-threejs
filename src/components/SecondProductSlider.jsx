import {useState,useEffect} from 'react'
import axios from 'axios'
import Products from '../components/Products'

function SecondProductSlider() {
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
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
        <div className="carousel-inner" style={{height:'400px'}}>
          <div className="carousel-item active">
            <div className='d-flex justify-content-center align-items-center'style={{columnGap:'4em'}}>
            {listaProductos.slice(0, 3).map((producto) => (
                  <Products key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                  pDesc={producto.descProducto} 
                  pCost={`S/${producto.precioProducto}`}/>
                ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className='d-flex justify-content-center align-items-center'style={{columnGap:'4em'}}>
              {listaProductos.slice(3, 6).map((producto) => (
                    <Products key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                    pDesc={producto.descProducto} 
                    pCost={`S/${producto.precioProducto}`}/>
                  ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className='d-flex justify-content-center align-items-center'style={{columnGap:'4em'}}>
              {listaProductos.slice(6, 9).map((producto) => (
                    <Products key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                    pDesc={producto.descProducto} 
                    pCost={`S/${producto.precioProducto}`}/>
                  ))}
            </div>
          </div>
        </div>
        <button style={{width:'4%'}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <i className="bi bi-caret-left" aria-hidden="true" style={{color:'#000'}}></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button style={{width:'4%'}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <i className="bi bi-caret-right" aria-hidden="true" style={{color:'#000'}}></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default SecondProductSlider