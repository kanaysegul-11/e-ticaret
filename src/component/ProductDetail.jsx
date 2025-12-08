import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/prodouctSlices';

function ProductDetail() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();

    useEffect(() => {
        const product = products?.find((p) => p.id == id);
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    }, [id, products, dispatch]);

    return (
        <div>{selectedProduct ? selectedProduct.title : "Ürün bulunamadı"}</div>
    );
}

export default ProductDetail;
