import React from "react";
import './style.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function Cart({ handleClick, handleBlur, Hide }) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let navigate = useNavigate();
    const handleToCart = () => {
        let path = `/cart`;
        navigate(path);
    }


    return (
        <div className="h-100 " onMouseMove={() => handleClick('bell')} onMouseOut={() => handleBlur('bell')}>
            <Link className="d-flex justify-content-center flex-column h-100" to='/cart'>
                <div className='icon-action d-flex justify-content-center align-items-center'><AiOutlineShoppingCart /> </div>
                <div className='text-action'><Link to=''>{Hide.Country === 'VN' ? 'Giỏ Hàng' : 'My Cart'}</Link></div>
            </Link>
            <div className='page-cart' style={Hide.bell ? { display: 'none' } : { display: 'block' }}>
                <div className="product">
                    {cart ? cart.map((cart, index) => {
                        return (
                            <div key={index} className="cart-product">
                                <img alt="product-image" src={`/images/${cart.hinhanh}.jpg`} />
                                <p>{cart.tensp}</p>
                                <p className="gia">{cart.gia}</p>
                            </div>
                        );
                    })
                        :
                        <div className="cart-product">  </div>}
                    <div className="cart-button m-2 d-flex justify-content-between align-items-center">
                        <p>Thêm Hàng Vào Giỏ</p>
                        <button className="btn btn-info" onClick={handleToCart}>Xem giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
