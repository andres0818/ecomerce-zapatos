import React, { useState } from 'react'
import basurero from '../../img/icon-delete.svg'
import Carrtio from '../../img/icon-cart.svg';
import './CarritoPopOver.scss'

const CarritoPopOver = ({ carrito, eliminar }) => {

  return (
    <>
      <div className='carro logo__cart'>
        <span className='carro__contenedor'><img src={Carrtio} alt='' /></span>
      <p className='carro__contador'>{carrito.length}</p>
        <div className='carro__articulos'>
          <h4>Cart</h4>
          <hr />
          {carrito &&
            carrito.map((e, index) => {
              return (

                <div className="car" key={index}>
                  <img className="car__img" src={e.img} alt='' />
                  <div className="car__info">
                    <h5 className="car__nombre" >{e.nombre}</h5>
                    <div className='car__costo'>
                      <span className="car__precio">${e.precio}</span>
                      <span className="car__cantidad">x{e.cantidad}</span>
                      <span className="car__total" >${(e.cantidad * e.precio).toFixed(2)}</span>
                      <button onClick={() => eliminar(e)} className="car__borrar"><img src={basurero} alt='' /></button>
                    </div>
                  </div>
                </div>

              )
            })
          }
          <button className='car__comprar'>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default CarritoPopOver