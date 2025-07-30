import React from 'react'

export default function Recive({ product, deleteProd }) {
    let { id, pName, price, desc, counter, onSale } = product;
    return (
        <>
            <div className="col-md-3">
                <div className="bg-warning item shadow-lg p-4 position-relative rounded">
                    <h2>Prod Name: {pName}</h2>
                    <h3>Prod Price: {price}</h3>
                    <h6>Prod Desc: {desc}</h6>
                    <p>Counter: {counter}</p>
                    {onSale && (<span className="badge bg-danger p-2 position-absolute top-0 end-0">On Sale</span>)}
                    <button className="btn btn-light" onClick={() => deleteProd(id)}>Delete</button>
                    <button className="btn btn-secondary">Update Counter</button>
                </div>

            </div>
        </>
    )
}
