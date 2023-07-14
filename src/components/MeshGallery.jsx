import '../estilos/gallery.css';

function MeshGallery(props) {
  const [cImg1,cImg2,cImg3,cImg4,cImg5]=props.cImg;
  const [vImg1]=props.vImg;
  const [hImg1,hImg2,hImg3]=props.hImg;

  return (
    <div className='galleryContainer'>
        <div className='itemGallery item1'>
          <img src={cImg1} className='itemImg'/>
          <p>Imagen 1</p>
        </div>
        <div className='itemGallery item2'>
          <img src={cImg2} className='itemImg'/>
          <p>Imagen 2</p>
        </div>
        <div className='itemGallery item3'>
          <img src={cImg5} className='itemImg'/>
          <p>Imagen 3</p>
        </div>
        <div className='itemGallery item4'>
          <img src={hImg1} className='itemImg'/>
          <p>Imagen 4</p>
        </div>
        <div className='itemGallery item5'>
          <img src={cImg3} className='itemImg'/>
          <p>Imagen 5</p>
        </div>
        <div className='itemGallery item6'>
          <img src={vImg1} className='itemImg'/>
          <p>Imagen 6</p>
        </div>
        <div className='itemGallery item7'>
          <img src={hImg2} className='itemImg'/>
          <p>Imagen 7</p>
        </div>
        <div className='itemGallery item8'>
          <img src={cImg4} className='itemImg'/>
          <p>Imagen 8</p>
        </div>
        <div className='itemGallery item9'>
          <img src={hImg3} className='itemImg'/>
          <p>Imagen 9</p>
        </div>
      </div>
  )
}

export default MeshGallery