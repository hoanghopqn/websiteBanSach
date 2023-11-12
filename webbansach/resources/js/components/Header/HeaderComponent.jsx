import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Shop from './Shop';
import Language from './Language';
import User from './User';
import SearchHeader from './SearchHeader';

const HeaderComponent = () => {
    const [Hide, setHide] = useState({
        search: true,
        menu: true,
        user: true,
        bell: true,
        language: true,
        Country: 'VN'
    });
    const [login, setLogin] = useState({});
    const handleClick = (name) => {
        setHide({ ...Hide, [name]: false })
    }
    const handleBlur = (name) => {
        setHide({ ...Hide, [name]: true })
    }
    return (
        <header className='header'>
            <div className='header-contain d-flex justify-content-around align-items-center'>
                <div className='header-title'>
                    <Link className='title' to='/'>NewShop</Link>
                </div>

                <SearchHeader handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} />
                <div className='header-action h-100'>
                    <ul className="d-flex justify-content-center m-0 p-0 h-100">
                        <li className='items-menu d-flex justify-content-center align-items-center position-ralative mx-2 h-100'><Shop handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} /></li>
                        <li className='items-menu d-flex justify-content-center align-items-center position-ralative mx-2 h-100'><Cart handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} /></li>
                        <li className='items-menu d-flex justify-content-center align-items-center position-ralative mx-2 h-100'><User handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} /></li>
                        <li className='items-menu d-flex justify-content-center align-items-center position-ralative mx-2 h-100'><Language handleClick={handleClick} handleBlur={handleBlur} Hide={Hide} setHide={setHide} /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default HeaderComponent;
