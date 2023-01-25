import React from 'react'
import './ImagenesArticulo.scss'


const ImagenesArticulo = ({ imagenPrincipal, imagenes, onClick }) => {
  return (
    <div className='ImagenesArticulo'>
      <img onClick={onClick} src={imagenPrincipal} className='ImagenesArticulo__principal' alt="" />

      <div className='ImagenesArticulo__miniImagene'>
        {imagenes.map((imagen, index) => {
          return <img onClick={onClick} src={imagen} key={index} alt="" />
        })}

      </div>
    </div>
  )
}

export default ImagenesArticulo