import cImg1 from '../images/cuadros/cImg/cImg1.png';
import cImg2 from '../images/cuadros/cImg/cImg2.png';
import cImg3 from '../images/cuadros/cImg/cImg3.png';
import cImg4 from '../images/cuadros/cImg/cImg4.png';
import cImg5 from '../images/cuadros/cImg/cImg6.jpg';

import vImg1 from '../images/cuadros/vImg/vImg9.png';

import hImg1 from '../images/cuadros/hImg/hImg1.png'
import hImg2 from '../images/cuadros/hImg/hImg3.png';
import hImg3 from '../images/cuadros/hImg/hImg8.png';
import '../estilos/gallery.css';
import MeshGallery from '../components/MeshGallery';
//const cImg = require.context('../images/cuadros/cImg', true);
function Gallery() {
  return (
    <div className='container-xxl d-flex flex-column align-items-center' style={{width:'100%'}}>
      <MeshGallery cImg={[cImg1,cImg2,cImg3,cImg4,cImg5]} vImg={[vImg1]} hImg={[hImg1,hImg2,hImg3]}/>
      {/* PAGINATION CONTROL */}
      <div className='galleryControler'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Gallery