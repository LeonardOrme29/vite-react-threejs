import { Link } from 'react-router-dom'
import '../estilos/productos.css'
function Products (props){
  return (
    <Link to={`/product/${props.id}`}>
      <div className='pContainer d-flex flex-column'>
        <div className='pContainerImg d-flex flex-row justify-content-center align-items-center'>
          <div className='prueba'></div>
        </div>
        <div className='pInfo d-flex flex-column'>
          <p className='pNombre'>{props.pNombre}</p>
          <p className='pDesc'>{props.pDesc}</p>
          <p className='pCost'>{props.pCost}</p>
          <p className='pTag'>{props.pTag}</p>
        </div>
    </div>
    </Link>
  )
}

export default Products