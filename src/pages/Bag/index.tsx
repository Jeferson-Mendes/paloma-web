import React from 'react';

import { ArrowBackIos } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { createStyles, FormControlLabel, Switch, SwitchClassKey, SwitchProps, Theme, withStyles } from '@material-ui/core';


import productImg from '../../assets/product.svg';

import './style.css';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
  }
  
interface Props extends SwitchProps {
    classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 55,
      height: 26,
      padding: 1,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: '0 0.8rem',
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#F1186A',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Bag: React.FC = () => {
    const [checked, setChecked] = React.useState(false);

    const history = useHistory();

    const handleHistory = () => {
        history.goBack();
    }

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
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
            </section>
            <section className="finish-purchase">
                <div className="is-delivery-total">
                    <span className="delivery-span">Delivery:</span>
                    <FormControlLabel
                    control={<IOSSwitch color="primary" size="medium" checked={checked} onChange={toggleChecked} />}
                    label="Não    Sim"
                    labelPlacement="top"
                    />
                    <p className="total-price">
                        Valor Total: <span>R$ 47,90</span>
                    </p>
                    <div className="confirm-button">
                        <button>Finalizar</button>
                        <p>Adicionar Mais itens</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bag;
