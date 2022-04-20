import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home({stocks}) {

    

  return (
        <>
            {stocks.map(stock => (
                <section key={stock.index}>
                    <h2>{stock.name}</h2>
                    <h3>{stock.code}</h3>
                    <div>
                        preço: {stock.price}
                    </div>
                    <div>
                        <NavLink to={"/detail/" + stock.code}>Ver Detalhe</NavLink>
                    </div>
                </section>
            ))
            }
        </>
    );
}        

