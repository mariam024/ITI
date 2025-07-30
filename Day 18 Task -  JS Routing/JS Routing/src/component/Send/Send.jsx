import React, { useState } from 'react';
import Recive from '../Recive/Recive';

export default function Parent() {
    let prodArray = [
        {
            id: 1, pName: "Samsung"
            , price: 5000,
            onSale: true,
            desc: "good",
            counter: 0
        },
        { id: 2, pName: "iPhone", price: 7000, onSale: false, desc: "excellent", counter: 0 },
        { id: 3, pName: "Oppo", price: 4000, onSale: true, desc: "nice", counter: 0 },
        { id: 4, pName: "Xiaomi", price: 3000, onSale: false, desc: "affordable", counter: 0 },
        {
            id: 5, pName: "Samsung"
            , price: 5000,
            onSale: true,
            desc: "good",
            counter: 0
        },
        { id: 6, pName: "iPhone", price: 7000, onSale: false, desc: "excellent", counter: 0 },
        { id: 7, pName: "Oppo", price: 4000, onSale: true, desc: "nice", counter: 0 },
        { id: 8, pName: "Xiaomi", price: 3000, onSale: false, desc: "affordable", counter: 0 },

    ];

    let [products, setProducts] = useState(prodArray);

    function deleteProd(prodId) {
        let newProducts = products.filter((product) => product.id !== prodId);
        setProducts(newProducts);
    }

    return (
        <>
            <div>
                <div className="container text-2xl bg-primary p-4">
                    <div className="row">
                        {products.map((product) => (
                            <Recive key={product.id} product={product} deleteProd={deleteProd} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
