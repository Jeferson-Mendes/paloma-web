import React, { useState, useContext } from 'react';

import Header from '../../components/Header';
import productImg from '../../assets/product.svg';
import AuthContext from '../../contexts/auth';

import './style.css'

const Home:React.FC = () => {
    const [chooseBagQuantity, setChooseBagQuantity] = useState<number>(0)

    const { signed, signIn, user } = useContext(AuthContext);


    console.log(signed);
    console.log(user);



    const products = [
        {
            name: "Água colônia",
            category: "Perfume",
            price: 47.90,
            image: productImg,
        },
        {
            name: "Água colônia",
            category: "Perfume",
            price: 47.90,
            image: productImg,
        },
        {
            name: "Água colônia",
            category: "Perfume",
            price: 47.90,
            image: productImg,
        },
        {
            name: "Água colônia",
            category: "Perfume",
            price: 47.90,
            image: productImg,
        },
        {
            name: "Água colônia",
            category: "Perfume",
            price: 47.90,
            image: productImg,
        },
        {
            name: "Água colônia",
            category: "Perfume",
            price: 47.90,
            image: productImg,
        },
    ]

    return (
        <div className="home">
            <Header bagProductsQuantity={chooseBagQuantity} />

            <div className="product-field">
                <div className="grid">
                    {products.map((product, index) => (
                        <figure key={index}>
                            <img src={product.image} alt="product" />
                            <p className="product-name">{product.name}</p>
                            <span className="category">{product.category}</span>
                            <div className="price-info">
                                <p className="price">{ product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</p>
                                <button onClick={() => setChooseBagQuantity( chooseBagQuantity + 1 )} > + </button>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
               
        </div>
    )
}

export default Home;
