import React, { useState } from 'react'
import '../css/header.css'
import { RiShoppingBasket2Line } from "react-icons/ri";
import { IoIosMoon } from "react-icons/io";
import { CiLight } from "react-icons/ci";


export default function Header() {

    const [theme, setTheme] = useState(false);

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
                <img className='logo' src="./src/images/logo.png" alt="" />
                <p className='logo-text'>KAN A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Bir şeyler ara?' />
                <div >
                    {theme ? <IoIosMoon className='icon' onClick={changeThem} /> : <CiLight className='icon' onClick={changeThem} />}
                    <RiShoppingBasket2Line className='icon' />
                </div>

            </div>
        </div>
    )
}
