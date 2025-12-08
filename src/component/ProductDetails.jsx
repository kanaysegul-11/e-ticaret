import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../css/Product.css'
import '../App.css'
import { setSelectedProduct } from '../redux/slices/prodouctSlices';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";




function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const incerment = () => {
        setCount(count + 1)
    }

    const decarment = () => {
        setCount(count - 1)
    }

    const dispatch = useDispatch();

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    useEffect(() => {
        getProductById();
    })
    return (
        <div className='details'>
            <div style={{ marginRight: "40px" }}>
                <img className='details-image' src={image} alt="" />
            </div>
            <div >
                <h1 className='details-h1-title'>{title}</h1>
                <p className='details-p'>{description}</p>
                <h1 className='details-h1'>{price}₺</h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiCirclePlus onClick={incerment} style={{ fontSize: "40px", marginRight: "5px" }} /> <span style={{ fontSize: "35px" }}>{count}</span><CiCircleMinus onClick={decarment} style={{ fontSize: "40px", marginLeft: "5px" }} />
                </div>
                <div>
                    <button className='details-basket-btn'>Sepete Ekle</button>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails