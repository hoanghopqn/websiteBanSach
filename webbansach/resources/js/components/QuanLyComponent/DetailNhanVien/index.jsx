import React, { useState } from 'react';
import * as quanlyServices from '../../../apiServices/quanlyServices';
import './style.scss'
import { Link } from 'react-router-dom';

function DetailNhanVien() {
    const [test, settest] = useState('hoang hop');
    const nhanvien = JSON.parse(localStorage.getItem("nhanvien"));
    const [DetailNV, setDetailNV] = useState({
        hoten: nhanvien.user.hoten,
        taikhoan: nhanvien.user.taikhoan,
        diachi: nhanvien.user.diachi,
        email: nhanvien.user.email,
        sdt: nhanvien.user.sdt,
        ngaysinh: nhanvien.user.ngaysinh,
        ngayvaolam: nhanvien.user.ngayvaolam,
        hinhanh: nhanvien.user.hinhanh ? nhanvien.user.hinhanh : "user",
    });
    const handlSubmit = async () => {
        const editedContact = {
            id: nhanvien.user.id,
            hoten: DetailNV.hoten,
            sdt: DetailNV.sdt,
            diachi: DetailNV.diachi,
            ngaysinh: DetailNV.ngaysinh,
            ngayvaolam: DetailNV.ngayvaolam,
            email: DetailNV.email,
            taikhoan: nhanvien.user.taikhoan,
            hinhanh: DetailNV.hinhanh,
            thangthai: 1
        };
        await quanlyServices.update(`nhanvien/${nhanvien.user.id}`, editedContact);
        localStorage.setItem("nhanvien", JSON.stringify({ ...nhanvien, user: { ...editedContact } }));
    }
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...DetailNV };
        newFormData[fieldName] = fieldValue;

        setDetailNV(newFormData);
    };
    console.log(nhanvien);
    return (
        <> {nhanvien ? <>
            <form className='form-user m-3 mb-5' onSubmit={handlSubmit}>
                <div className="user-logo text-center">
                    <img className="user-image" alt="" src={`/images/${DetailNV.hinhanh}.jpg`} />
                </div>
                <div className='form-info'>
                    <div className='form-group m-3'>
                        <label>Tên Đăng Nhập: {nhanvien.user.taikhoan}</label>
                    </div>
                    <div className='form-group m-3'>
                        <label>Tên: </label>
                        <input className="form-control" type='text' name='hoten' value={DetailNV.hoten} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-group m-3'>
                        <label>Địa Chỉ: </label>
                        <input className="form-control" type='text' name='diachi' value={DetailNV.diachi} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-group m-3'>
                        <label>Số Điện Thoại: </label>
                        <input className="form-control" type='text' name='sdt' value={DetailNV.sdt} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-group m-3'>
                        <label>Email: </label>
                        <input className="form-control" type='text' name='email' value={DetailNV.email} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-group m-3'>
                        <label>Ngày Sinh: </label>
                        <input className="form-control" type='date' name='ngaysinh' value={DetailNV.ngaysinh} onChange={handleEditFormChange} />
                    </div>
                    <div className='form-group m-3'>
                        <label>Ngày Vào Làm: </label>
                        <input className="form-control" type='date' name='ngayvaolam' value={DetailNV.ngayvaolam} onChange={handleEditFormChange} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-info w-50'>Lưu</button>
                    </div>
                </div>
            </form></> : <></>}
        </>
    );
}

export default DetailNhanVien;