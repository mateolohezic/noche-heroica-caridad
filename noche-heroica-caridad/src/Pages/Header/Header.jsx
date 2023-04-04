import React from 'react'
import logo from './Logo.png'
import logoParroquia from './logoParroquia.png'
import './header.css';

function Header() {

  return (
    <nav className="navbar navbar-expand-lg headerPrincipal">
      <div className="container-fluid p-0">
        <div className='row w-100 m-0 p-0 align-items-center'>
            <div className="col-4 text-start ps-3">
              <a className="w-100" href="/"><img className='logoParroquia' src={logoParroquia} alt="logo" /></a>
            </div>
            <div className="col-4 text-center m-0 p-0">
              <a className="w-100" href="/"><img className='logoNavBar' src={logo} alt="logo" /></a>
            </div>
            <div className="col-4 m-0 p-0 row justify-content-end pe-3 gap-2">
                <div className="col-3 text-center m-0 p-0">
                    <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Facebook" href="https://www.facebook.com/accioncatolica.caridad"><div className='fs-3'><i className="bi bi-facebook"></i></div></a>
                </div>
                <div className="col-3 text-center m-0 p-0">
                    <a className="header-link" data-bs-toggle="tooltip" data-bs-placement="right" title="Instagram" href="https://www.instagram.com/accioncatolica.caridad/"><div className='fs-3'><i className="bi bi-instagram"></i></div></a>
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header