import Cabecera from "./components/Cabecera/Cabecera";
import Articulo from "./components/Articulo/Articulo";
import './App.scss';
import { useEffect, useState } from "react";
import Axios from "axios";
import * as apis from './components/api'



function App() {

  const [articulos, setArticulos] = useState([])
  const [articulosCarrito, setArticulosCarrito] = useState([])

  const agregarCarrito = (articulo) => {
    let newArticulos = [...articulosCarrito, {
      id: articulo.id,
      cantidad: articulo.cantidad,
      img: articulo.img, nombre: articulo.nombre,
      precio: articulo.precio
    }]
    setArticulosCarrito(newArticulos)
  }


  const eliminarArticulo = (index) => {
    console.log(index);
    console.log(articulosCarrito);
    const eliminar= articulosCarrito.filter(e=>e!==index)
    console.log(eliminar);
    setArticulosCarrito(eliminar)
    
  }


  useEffect(() => {

    Axios.get(apis.api)

      .then((result) => {
        const nuevosArticulos = result.data.record.allArticle.map((articulo) => articulo.product)
        setArticulos(nuevosArticulos)

      }).catch((err) => {
        console.log(err);
      });

  }, [])
  console.log();
  return (
    <div className="App">
      <Cabecera articulosCarrito={articulosCarrito} eliminarArticulo={eliminarArticulo} />
      <main className="App__main">
        {articulos.map((articulo) => {
          return <Articulo agregarCarrito={agregarCarrito} articulo={articulo} key={articulo.id} />
        })}
      </main>
    </div>
  );
}

export default App;
