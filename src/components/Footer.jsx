import '../estilos/footer.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Footer (){
  return (
    <div style={{background:'#fb7e14'}}>
      <div className='footerContainer container-xxl flex-column justify-content-center align-items-center'>
          <div className='spaceFooter'></div>
            <div className='footerContent d-flex align-items-center justify-content-between'>
              <div className='imgFooterLogo d-flex align-items-center'>
                <img src={logo}/>
              </div>
              <div className='footerText d-flex flex-column'>
                  <h5>Información</h5>
                  <Link>Términos y Condiciones</Link>
                  <Link>Política de Privacidad</Link>
                  <Link>Cookies</Link>
              </div>
                <div className='footerText d-flex flex-column'>
                  <h5>Contáctanos</h5>
                  <p>TAAL Creations and Art</p>
                  <p>Lima, Perú</p>
                  <a href="mailto:taalcreationsandart@gmail.com">taalcreationsandart@gmail.com</a>
                </div>
                <div className='footerText d-flex flex-column justify-content-center'>
                  <h5>Redes Sociales</h5>
                  <Link>Instagram</Link>
                  <Link>Facebook</Link>
                  <Link>Tik Tok</Link>
                </div>
            </div>
          <div className='spaceFooter footerText d-flex justify-content-end'><p>©2023 TAAL Creations & Art</p></div>
      </div>
      {/*--------------- MOBILE FOOTER ----------------------*/}
      <div className='mobileFooterContainer'>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Información Legal
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className='accordion-body footerText d-flex flex-column'>
                    <Link>Términos y Condiciones</Link>
                </div>
                <div className='accordion-body footerText d-flex flex-column'>
                    <Link>Política de Privacidad</Link>
                </div>
                <div className='accordion-body footerText d-flex flex-column'>
                    <Link>Cookies</Link>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Contáctanos
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className='accordion-body footerText d-flex flex-column'>
                  <Link>Correo Electrónico</Link>
                </div>
                <div className='accordion-body footerText d-flex flex-column'>
                  <Link>Telegram</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer