import React from 'react'
import logoUrl from '../../img/logo.svg';
import CarritoPopOver from '../CarritoPopOver/CarritoPopOver';
import './Cabecera.scss';

const Cabecera = ({articulosCarrito,eliminarArticulo}) => {


    return (
        <header className='Cabecera'>
            <div>
                <img src={logoUrl} alt="Logo" className='Cabecera__logo' />
            </div>
            <nav className='Cabecera__menu'>
                <ul>
                    <li><a href="#/">Collections</a></li>
                    <li><a href="#/">Men</a></li>
                    <li><a href="#/">Women</a></li>
                    <li><a href="#/">About</a></li>
                    <li><a href="#/">Contact</a></li>
                </ul>
            </nav>
             <CarritoPopOver carrito={articulosCarrito} eliminar={eliminarArticulo} key={12} /> 
        </header>
    )
}

export default Cabecera
