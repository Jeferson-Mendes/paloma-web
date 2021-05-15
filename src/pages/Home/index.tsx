import React, { useState } from 'react';

import Header from '../../components/Header';
import productImg from '../../assets/product.svg';

import './style.css'

const Home:React.FC = () => {
    const [chooseBagStatus, setChooseBagStatus] = useState<boolean>(false)

    return (
        <div className="home">
            <Header bagIsEmpty={chooseBagStatus} />

            <div className="product-field">
                <div className="grid">
                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button onClick={() => setChooseBagStatus(true)} > + </button>
                        </div>
                    </figure>

                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button onClick={() => setChooseBagStatus(true)} > + </button>
                        </div>
                    </figure>

                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button onClick={() => setChooseBagStatus(true)} > + </button>
                        </div>
                    </figure>

                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button onClick={() => setChooseBagStatus(true)} > + </button>
                        </div>
                    </figure>
                </div>
            </div>
               
        </div>
    )
}

export default Home;
