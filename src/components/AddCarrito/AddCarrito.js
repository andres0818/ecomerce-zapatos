import React from 'react'
import carritoUrl from '../../img/icon-cart.svg';
import './AddCarrito.scss';

const AddCarrito = ({ onClick }) => {
    return (
        <button onClick={onClick} className="AddCarrito">
            <img className="AddCarrito__icono" src={carritoUrl} alt="" /> Add to cart
        </button>
    )
}

export default AddCarrito