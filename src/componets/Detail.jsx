import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Detail() {

  const params = useParams();//para ir busacar os parametros do code

  const [stock, setStock] = useState();

  useEffect( () => {

    fetch("https://justivo.com/stockws.php?get&code=BST")
    .then(response => response.json())
    .then(dataReceived => setStock(dataReceived));
  }, []);

  return (
      <section key={stock.index}>
        <h2>{stock.name}</h2>
        <h3>{stock.code}</h3>
        <div>
            preço: {stock.price}
        </div>
        </section>
  )
}
/*<section key={stock.index}>
<h2>{stock.name}</h2>
<h3>{stock.code}</h3>
<div>
    preço: {stock.price}
</div>
<div>
    <NavLink to={"/detail/" + stock.code}>Ver Detalhe</NavLink>
</div>
</section>*/