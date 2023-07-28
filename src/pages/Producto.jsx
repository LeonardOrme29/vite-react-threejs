import cuadro from '../images/cuadro-producto.png'
import cuadro2 from '../images/cuadro-producto-v2.png'
import cuadro3 from '../images/cuadro-producto-v3.png'
import cuadro4 from '../images/cuadro-producto-v4.png'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
function Producto() {
  const [product,setProduct]=useState([])
  const { id } = useParams();
  useEffect(()=>{
    getProduct()
  },[])
  async function getProduct (){
    const res=await axios.get(`http://localhost:3001/api/cuadros/${id}`);
    setProduct(res.data);
  }
  if (product.length!=0) {
    return (
      <div className='container-xxl d-flex'>
        <div className='image-container'>
          <div className='margin-box'></div>
          <div className='product-imagen-box d-flex flex-row justify-content-center align-items-end'>
            <div className='review-container d-flex flex-column justify-content-center align-items-center'>
              <div className='review-box' style={{ backgroundColor: 'black', height: '80px', width: '80px', margin: '20px 0' }}>
                <img className='producto-imagen' src={cuadro2} alt='...' />
              </div>
              <div className='review-box' style={{ backgroundColor: 'black', height: '80px', width: '80px', margin: '20px 0' }}>
                <img className='producto-imagen' src={cuadro3} alt='...' />
              </div>
              <div className='review-box' style={{ backgroundColor: 'black', height: '80px', width: '80px', margin: '20px 0' }}>
                <img className='producto-imagen' src={cuadro4} alt='...' />
              </div>
            </div>
            <div className='d-flex flex-column'>
              <div className='imagen-box'>
                <img className='producto-imagen' src={cuadro} alt='...' />
              </div>
            </div>
          </div>
          <div className='blank-container d-flex justify-content-center'>
            <div className='blank-box'></div>
          </div>
          <div className='margin-box'></div>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: 'white', height: '800px', width: '100%' }}>
          <div className='product-container d-flex flex-column justify-content-start' style={{ width: '80%' }}>
            <div className='back-container d-flex align-items-center'>
              <i className="bi bi-arrow-left-short" />
              <p className='text-back'>Volver</p>
            </div>
            <div className='text-product-container'>
              <h1 className='text-title-product'>{product.nomProducto}</h1>
              <h2 className='text-author-product'>Hettie Richards</h2>
            </div>
            <div className='quality-contanier'>
              <h3 className='text-quality one'>{product.tagProducto[0]}</h3>
              <h3 className='text-quality one'>{product.tagProducto[1]}</h3>
              <h3 className='text-quality one'>{product.tagProducto[2]}</h3>
            </div>
            <div className='desc-container'>
              <p className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='price-container d-flex justify-content-end'>
              <h3 className='text-price'>$599.90</h3>
            </div>

            <div className='shipping-container'>
              <p className='text-shipping'>Envío estimado en 3-5 días</p>
            </div>
            <div className="buttom-add-cart d-grid gap-2">
              <button className="btn btn-primary" type="button">Agregar al Carro</button>
            </div>
          </div>
        </div>
      </div>
      )
  }else{
    return (<Loading/>)
  }
}

export default Producto