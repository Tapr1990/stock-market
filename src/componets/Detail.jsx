import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Detail() {

  const params = useParams();//para ir busacar os parametros do code

  const [stock, setStock] = useState();

  useEffect( () => {

    fetch("https://justivo.com/stockws.php?get&code=" + params.code)
    .then(response => response.json())
    .then(dataReceived => setStock(dataReceived));
  }, [params]);

  function toggleFavorite() {
    setStock( prevState => ({
      ...prevState,//é importante, para voltar a retribuir o array todo, spread operator é para utilizxar quando as coisas desaparecem
      isFavorite: !prevState.isFavorite
    }));
  }

  return (
    <>
      {stock && (
        <section>
          <h2>{stock.name}</h2>
          <h3>{stock.code}</h3>
          <div>
              preço: {stock.price}
          </div>
          <div>
            <button onClick={toggleFavorite}>
            {stock.isFavorite ? "Remover " : "Marcar "}
            Favorito
            </button>
           
          </div>
        </section>
    )}
    </>
  )
}
//{stock.isFavorite.toString()}