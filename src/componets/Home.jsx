import React from 'react'

export default function Home({stocks}) {

    

  return (
        <>
            {stocks.map(stock => (
                <section key={index}>
                    <h2>{stock.name}</h2>
                    <h3>{stock.code}</h3>
                    <div>
                        preço: {stock.price}
                    </div>
                </section>
            ))
            }
        </>
    );
}        

