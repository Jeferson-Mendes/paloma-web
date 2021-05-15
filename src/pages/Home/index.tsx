import React from 'react';

import Header from '../../components/Header';
import productImg from '../../assets/product.svg';

import './style.css'

const Home = () => {
    return (
        <div className="home">
            <Header/>

            <div className="product-field">
                <div className="grid">
                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button> + </button>
                        </div>
                    </figure>

                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button> + </button>
                        </div>
                    </figure>

                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button> + </button>
                        </div>
                    </figure>

                    <figure>
                        <img src={productImg} alt="product" />
                        <p className="product-name">Água de colônia</p>
                        <span className="category">Perfume</span>
                        <div className="price-info">
                            <p className="price">R$47,90</p>
                            <button> + </button>
                        </div>
                    </figure>
                </div>
            </div>
               
        </div>
    )
}

export default Home;
