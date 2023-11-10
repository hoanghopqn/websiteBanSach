import React, { useState } from "react";
import './style.scss'
import * as quanlyServices from '../../../apiServices/quanlyServices';
import { AiOutlineSearch } from "react-icons/ai";

function SearchHeader({ handleClick, handleBlur, Hide }) {
    const [searchS, setSearchS] = useState('');
    const [dsSearchS, setDSSearchS] = useState([]);
    const handleSearchChange = async (e) => {

        setSearchS(e.target.value)
        const result = await quanlyServices.get(`SearchDetail/${e.target.value}`);
        setDSSearchS(result.sanpham.data)
    }
    return (
        <div className='header-seach h-100'>
            <div className='input-menu d-flex justify-content-around align-items-center h-100'>
                <div className='find-seach input-group m-0'>
                    <input className='header-input form-control' value={searchS} type='search' onChange={(e) => handleSearchChange(e)} placeholder={Hide.Country === 'VN' ? 'Tìm kiếm...' : 'Search...'} onClick={() => handleClick('search')} onBlur={() => handleBlur('search')} />
                    <button className='button-seach btn btn-primary'><AiOutlineSearch size={25} /></button>
                </div>
                <div className='page-seach' style={Hide.search ? { display: 'none' } : { display: 'block' }}>
                    {dsSearchS ? dsSearchS.map((sach, index) => {
                        return (
                            <div key={index} className="cart-product">
                                <img alt="product-image" src={`/images/${sach.hinhanh}.jpg`} />
                                <p>{sach.tensp}</p>
                                <p>Thể Loại: {sach.tenloaisp}</p>
                                <p>Tác Giả: {sach.tentacgia}</p>
                                <p>NuocwsXB: {sach.tennuoc}</p>
                                <p className="gia">{sach.gia}</p>
                            </div>
                        );
                    })
                        :
                        <div className="cart-product searchStyle">  </div>}
                </div>
            </div>
        </div>
    );
}

export default SearchHeader;
