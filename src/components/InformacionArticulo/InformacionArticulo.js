import React from 'react'
import './InformacionArticulo.scss';

const InformacionArticulo = ({ articulo }) => {
    const { nombre, precio, descripcion } = articulo
    return (
        <section className='InformacionArticulo'>
            <h2>{nombre}</h2>
            <h1>Fall limited Sneakers</h1>
            <p>{descripcion}</p>
            <div className="InformacionArticulo__precio">{precio}</div>
            <div className='InformacionArticulo__descuento'>
                50% Off
            </div>
        </section>
    )
}

export default InformacionArticulo;