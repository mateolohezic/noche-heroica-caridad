
import React from 'react'
import './footer.css';
import logo from './Logo.png'
import logoParroquia from './logoParroquia.png'


const Footer = () => {
  return (
    <>
        <footer className="pie-pagina footerShadow">
          <div className="grupo-1">
          <div className="box-1">
              <div className="box">
                <figure>
                  <a href="/" className="logo">
                    <img src={logo} className='logoFooter2' alt="Logo" />
                  </a>
                </figure>
              </div>
            </div>
            <div className="box">
              <figure>
                <a href="/" className="logo">
                  <img src={logoParroquia} className='logoFooter' alt="Logo" />
                </a>
              </figure>
            </div>
            <div className='d-flex flex-column'>
              <div className="box">
                <h2>SÍGUENOS</h2>
                <div className="redes">
                  <a href="https://www.instagram.com/accioncatolica.caridad/"><i className="bi bi-instagram"></i></a>
                  <a href="https://m.facebook.com/accioncatolica.caridad"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
              <div className="box">
                <div className="informacionContacto mt-3">
                  <div>Tucumán, Argentina</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
