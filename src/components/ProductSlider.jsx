import {useState,useEffect} from 'react'
import Products from '../components/Products'
import axios from 'axios'


function ProductSlider() {
  const [listaProductos,setListaProductos]=useState([]);
  const [moveSlide,setMoveSlide]=useState(0);
  const [leftSlider,setLeftSlider]=useState(false);
  const [rightSlider,setRightSlider]=useState(false);

  useEffect(()=>{
    getProductos()
  },[])
  const getProductos= async ()=>{
    const res=await axios.get('http://localhost:3001/api/cuadros');
    setListaProductos(res.data);
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Variables de ejemplo para ajustar según el ancho de la ventana
  let variable1
  if (windowWidth>=900) {
    variable1 = 5;
  }else if (windowWidth > 720) {
    // Ajustar las variables para ancho mayor a 900px y menor o igual a 1300px
    variable1 = 4;
  } else if (windowWidth > 550) {
    // Ajustar las variables para ancho mayor a 600px y menor o igual a 900px
    variable1 = 3;
  } else if(windowWidth > 370){
    // Ajustar las variables para ancho menor o igual a 600px
    variable1 = 2;
  }else{
    variable1=1
  }
  
  useEffect(() => {
    if(moveSlide===1){
      setLeftSlider(true)
      setRightSlider(true)
    }else if(moveSlide===2){
      setLeftSlider(true)
      setRightSlider(false)
    }else{
      setLeftSlider(false)
      setRightSlider(true)
    }
  }, [moveSlide])
  
  function leftButtom() {
    if (moveSlide>0) {
      setMoveSlide(moveSlide-1)
    }
  }
  function rightButtom() {
    if (moveSlide>=0 && moveSlide<2) {
      setMoveSlide(moveSlide+1)
    }
  }
  return (
    <>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false" style={{margin:'.5em 0',width:'100%'}}>
      <div className="carousel-inner" style={{height:'auto',minHeight:'240px',display:'flex',alignItems:'center'}}>
        <div className={`carousel-item active`}>
          <div className='d-flex justify-content-center align-items-center'style={{columnGap:'1em'}}>
          {listaProductos.slice(0, variable1).map((producto) => (
                <Products id={producto._id} key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                pDesc={producto.descProducto} 
                pCost={`S/${producto.precioProducto}`}/>
              ))}
          </div>
        </div>
        <div className={`carousel-item`}>
          <div className='d-flex justify-content-center align-items-center'style={{columnGap:'1em'}}>
            {listaProductos.slice(variable1, variable1*2).map((producto) => (
                  <Products key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                  pDesc={producto.descProducto} 
                  pCost={`S/${producto.precioProducto}`}/>
                ))}
          </div>
        </div>
        <div className={`carousel-item`}>
          <div className='d-flex justify-content-center align-items-center'style={{columnGap:'1em'}}>
            {listaProductos.slice(variable1*2, (variable1*3)-1).map((producto) => (
                  <Products key={producto.nomProducto} img='gallery' pNombre={producto.nomProducto} 
                  pDesc={producto.descProducto} 
                  pCost={`S/${producto.precioProducto}`}/>
                ))}
            <Products/>
          </div>
        </div>
      </div>
      <button style={{width:'4%'}} onClick={leftButtom} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide={`${!leftSlider?'nothing':'prev'}`}>
        <i className="bi bi-caret-left" aria-hidden="true" style={{color:'#000'}}></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button style={{width:'4%'}} onClick={rightButtom} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide={`${rightSlider?'next':'nothing'}`}>
        <i className="bi bi-caret-right" aria-hidden="true" style={{color:'#000'}}></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}

export default ProductSlider