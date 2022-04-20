import React from 'react'
import { useParams } from 'react-router-dom'


export default function Detail() {

  const params = useParams();

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