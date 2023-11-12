import React, { useState } from 'react';
import './style.scss'
import * as quanlyServices from '../../apiServices/quanlyServices';
import { Link } from 'react-router-dom';

function DetailKhachHang() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [DetailKH, setDetailKH] = useState({
        hoten: user.hoten,
        taikhoan: user.taikhoan,
        diachi: user.diachi,
        email: user.email,
        sdt: user.sdt,
        ngaysinh: user.ngaysinh,
    });
    const handlSubmit = async () => {
        const editedContact = {
            id: user.id,
            hoten: DetailKH.hoten,
            diachi: DetailKH.diachi,
            sdt: DetailKH.sdt,
            taikhoan: user.taikhoan,
            email: DetailKH.email,
            ngaysinh: DetailKH.ngaysinh,
            thangthai: 1
        };
        await quanlyServices.update(`khachhang/${user.id}`, editedContact);
        localStorage.setItem("user", JSON.stringify(editedContact));
    }
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...DetailKH };
        newFormData[fieldName] = fieldValue;

        setDetailKH(newFormData);
    };
    return (
        <> {user ?
            <div className="form-info-wrapper d-flex justify-content-center align-items-center">
                <form onSubmit={handlSubmit} className='form-info w-100'>
                    <div className='form-item-group my-3'>
                        <label>Tên Đăng Nhập: {user.taikhoan}</label>
                    </div>
                    <div className='form-item-group my-3'>
                        <label>Tên: </label>
                        <input type='text' name='hoten' className="form-control" value={DetailKH.hoten} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-item-group my-3'>
                        <label>Địa Chỉ: </label>
                        <input type='text' name='diachi' className="form-control" value={DetailKH.diachi} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-item-group my-3'>
                        <label>Số Điện Thoại: </label>
                        <input type='text' name='sdt' className="form-control" value={DetailKH.sdt} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-item-group my-3'>
                        <label>Email: </label>
                        <input type='text' name='email' className="form-control" value={DetailKH.email} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-item-group my-3'>
                        <label>Ngày Sinh: </label>
                        <input type='date' name='ngaysinh' className="form-control" value={DetailKH.ngaysinh} onChange={handleEditFormChange} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn-save btn btn-info w-50'>Lưu</button>
                    </div>
                </form>
            </div> : <></>}
        </>
    );
}

export default DetailKhachHang;