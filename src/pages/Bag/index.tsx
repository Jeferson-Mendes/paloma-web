import React from 'react';

import { ArrowBackIos } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import productImg from '../../assets/product.svg';

import './style.css';

const Bag: React.FC = () => {

    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }
    return (
        <>
            <ArrowBackIos onClick={handleHistory} style={{ fontSize: 20, margin: '2rem' }} />

            <div className="main-product">
                <figure>
                    <img src={productImg} alt="product" />
                </figure>
                <div className="product-info">
                    <h2 className="product_name">Água de Colônia</h2>
                    <p className="product_category">Perfume</p>

                    <div className="quantity-price-container">
                        <div className="quantity-config">
                            <button className="subtraction"> - </button>
                            <div className="quantity-number" >1</div>
                            <button className="plus"> + </button>
                        </div>
                        <span>R$ 47,99</span>
                    </div>
                </div>
                <div className="horizontal-line"></div>

                <div className="main-prod-desc">
                    <p>Cheirinho de bebê, amor, carinho e cuidado.</p>
                    <span>Fórmula 100% segura para ser usada desde o primeiro dia de vida, testada e aprovada por pediatras. Com perfumação suave, sem álcool para não agredir a pele sensível e delicada do bebê.</span>
                </div>

                <div className="horizontal-line"></div>
            </div>
            <section className="bag-products">

                <div className="product">
                    <figure>
                        <img src={productImg} alt="product" />
                    </figure>
                    <div className="product-details">
                        <p>Conjunto Mamãe e Bebê com 
                        Bolsa e Trocador</p>
                        <span>R$ 14,00</span>

                        <div className="quantity-config">
                            <button className="subtraction"> - </button>
                            <div className="quantity-number" >1</div>
                            <button className="plus"> + </button>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <figure>
                        <img src={productImg} alt="product" />
                    </figure>
                    <div className="product-details">
                        <p>Conjunto Mamãe e Bebê com 
                        Bolsa e Trocador</p>
                        <span>R$ 14,00</span>

                        <div className="quantity-config">
                            <button className="subtraction"> - </button>
                            <div className="quantity-number" >1</div>
                            <button className="plus"> + </button>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <figure>
                        <img src={productImg} alt="product" />
                    </figure>
                    <div className="product-details">
                        <p>Conjunto Mamãe e Bebê com 
                        Bolsa e Trocador</p>
                        <span>R$ 14,00</span>

                        <div className="quantity-config">
                            <button className="subtraction"> - </button>
                            <div className="quantity-number" >1</div>
                            <button className="plus"> + </button>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <figure>
                        <img src={productImg} alt="product" />
                    </figure>
                    <div className="product-details">
                        <p>Conjunto Mamãe e Bebê com 
                        Bolsa e Trocador</p>
                        <span>R$ 14,00</span>

                        <div className="quantity-config">
                            <button className="subtraction"> - </button>
                            <div className="quantity-number" >1</div>
                            <button className="plus"> + </button>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <figure>
                        <img src={productImg} alt="product" />
                    </figure>
                    <div className="product-details">
                        <p>Conjunto Mamãe e Bebê com 
                        Bolsa e Trocador</p>
                        <span>R$ 14,00</span>

                        <div className="quantity-config">
                            <button className="subtraction"> - </button>
                            <div className="quantity-number" >1</div>
                            <button className="plus"> + </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bag;
