import React, { useState } from 'react'
import AddCarrito from '../AddCarrito/AddCarrito'
import ContadorArticulo from '../ContadorArticulo/ContadorArticulo'
import ImagenesArticulo from '../ImagenesArticulo/ImagenesArticulo'
import InformacionArticulo from '../InformacionArticulo/InformacionArticulo'
import Modal from '../Modal/Modal'
import './Articulo.scss'

const Articulo = ({ articulo, agregarCarrito }) => {

    const { id, imagenUno, imagenDos, imagenTres, imagenCuatro, nombre, precio } = articulo

    const [contador, setContador] = useState(0)
    const [modalAbierto, setModalAbierto] = useState(false)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador < 1 ? contador : contador - 1)
    }

    const onClick = () => {
        const articulo = {
            id: id,
            img: imagenUno,
            nombre: nombre,
            precio: precio
        }
        agregarCarrito({
            id: articulo.id,
            cantidad: contador,
            img: articulo.img,
            nombre: articulo.nombre,
            precio: articulo.precio
        })
        setContador(0)
    }


    return (
        <article className='Articulo'>
            <div>
                <ImagenesArticulo onClick={() => setModalAbierto(true)} imagenPrincipal={imagenUno} imagenes={[imagenDos, imagenTres, imagenCuatro]} />
            </div>
            <div style={{margin:'100px 0 0 0'}}>
                <InformacionArticulo articulo={articulo} />
                <div className="Articulo__botones">
                    <ContadorArticulo contador={contador} incrementar={incrementar} decrementar={decrementar} />
                    <AddCarrito onClick={onClick} />
                </div>
                <div>
                </div>
            </div>
            {modalAbierto &&
                <div onClick={() => setModalAbierto(false)} >
                    <Modal articulo={articulo} />
                </div>
            }
        </article>
    )
}

export default Articulo