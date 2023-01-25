import React from 'react'
import './ContadorArticulo.scss'

const ContadorArticulo = ({contador,decrementar,incrementar}) => {
  
  return (
    <div className='ContadorArticulo'>
      <button onClick={decrementar} className='ContadorArticulo__btnMenos'>-</button>
      <span className='ContadorArticulo__contador'>{contador}</span>
      <button onClick={incrementar} className='ContadorArticulo__btnMas'>+</button>
    </div>
  )
}

export default ContadorArticulo