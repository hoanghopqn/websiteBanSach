import React from "react";
import './style.scss'
import { AiFillShop } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function Shop({ handleClick, handleBlur, Hide }) {

    return (
        <div className="">
            <Link to='/shop' className="d-flex justify-content-center flex-column h-100">
                <div className='icon-action d-flex justify-content-center align-items-center'  ><AiFillShop /> </div>
                <div className='text-action'>{Hide.Country === 'VN' ? 'Cửa Hàng' : 'Shop'}</div>
            </Link>
        </div>
    );
}

export default Shop;
