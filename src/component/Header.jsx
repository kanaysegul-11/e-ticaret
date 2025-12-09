import React, { useState } from 'react'
import '../css/header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { setDrawer } from '../redux/slices/basketSlice';

export default function Header() {

    const navigate = useNavigate();

    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.basket);
    const changeThem = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <div className='flex-row' >
                <img onClick={() => navigate("/")} className='logo' src="./src/images/logo.png" alt="" />
                <p className='logo-text' >KAN A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Bir şeyler ara?' />
                <div className='flex-row'>
                    {theme ? <IoIosMoon className='icon' onClick={changeThem} /> : <CiLight className='icon' onClick={changeThem} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color='error'>
                        <CiShoppingBasket style={{ marginRight: "2px" }} className='icon' />
                    </Badge>

                </div>

            </div>
        </div>
    )
}
