import React, { useState, useEffect } from 'react';
import formatCurrency from '../util';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';

export const Products = ({ products, addToCart }) => {

    const [prod, setProd] = useState(null);

    useEffect(() => {
        Modal.setAppElement('body');
    }, [prod])

    const openModal = (product) => {
        setProd(product);
    };

    const closeModal = () => {
        setProd(!prod);
    }

    return (
        <div>
            <Bounce bottom cascade>
                <ul className='products'>
                    {
                        products.map(product => {
                            return <li key={product.id}>
                                <div className='product'>
                                    <a href={"#" + product.id}>
                                        <img
                                            className='img'
                                            src={product.image}
                                            alt={product.title}
                                            onClick={() => openModal(product)}
                                        />
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className='product-price'>
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button
                                            className='button prymary'
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to Cart
                                    </button>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </Bounce>
            {
                prod && (
                    <Modal className='modal' isOpen={true}>
                        <Zoom>
                            <button
                                className='close-modal'
                                onClick={() => closeModal()}
                            >
                                X
                            </button>
                            <div className='product-details'>
                                <img
                                    src={prod.image}
                                    alt={prod.title}
                                />
                                <div className='product-details-description'>
                                    <p>
                                        <strong>{prod.title}</strong>
                                    </p>
                                    <p>
                                        {prod.description}
                                    </p>
                                    <p>Available Size : {" "}
                                        {prod.availableSizes.map((x) => (
                                            <span> {" "}
                                                <button className='button'>{x}</button>
                                            </span>
                                        ))}
                                    </p>
                                    <div>
                                        {formatCurrency(prod.price)}
                                    </div>
                                    <button
                                        className='button'
                                        onClick={() => {
                                            addToCart(prod);
                                            closeModal()
                                        }}>
                                        Add To Cart
                                        </button>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )
            }
        </div>
    )
};
export default Products;
