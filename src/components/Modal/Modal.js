import React from 'react'
import ImagenesArticulo from '../ImagenesArticulo/ImagenesArticulo'
import close from '../../img/icon-close.svg'
import './Modal.scss'

const Modal = (articulo) => {
    const { id, imagenUno, imagenDos, imagenTres, imagenCuatro } = articulo.articulo
    console.log(imagenUno);

  return (
    <div className='Modal'>
        <img src={close} className='Modal__cerrarModal' alt=''/>
        <ImagenesArticulo imagenPrincipal={imagenUno} imagenes={[imagenDos, imagenTres, imagenCuatro]}/> 
    </div>
  )
}

export default Modal

