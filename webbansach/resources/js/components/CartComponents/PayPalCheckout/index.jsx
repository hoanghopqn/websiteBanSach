import React, { useState } from "react";
import "./style.scss";
import { Button, ButtonGroup } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import * as quanlyServices from '../../../apiServices/quanlyServices';

function PayPalCheckout() {

  const user = JSON.parse(localStorage.getItem("user"));
  const tong = JSON.parse(localStorage.getItem("tongtien"));
  var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const [radio, setRadio] = useState('momo');
  let navigate = useNavigate();
  const handleToPayment = () => {
    let path = `/paymentCart`;
    navigate(path);
  }
  const [editFormData, setEditFormData] = useState({
    sdt: user ? user.sdt : '',
    diachi: user ? user.diachi : '',
    ghichu: '',
  });
  const handleToLogin = async () => {
    if (!user) {
      if (confirm("Vui Long Dang Nhap Tai Khoan!") == true) {

        let path = `/login`;
        navigate(path);
        localStorage.setItem("where", JSON.stringify('cart'));
      }
    } else {
      if (confirm("Bạn có chắc chắn mua hàng!") == true) {
        const carts = JSON.parse(localStorage.getItem("cart"));
        const tongtien = JSON.parse(localStorage.getItem("tongtien"));
        const ddh = await quanlyServices.get(`dondathang`);
        const newDDH = {
          khachhang_id: user.id,
          nhanvien_id: 1,
          diachi: editFormData.diachi,
          sdt: editFormData.sdt,
          ghichu: editFormData.ghichu,
          thangthai: 1,
          tongtien: tongtien,
          thoigiandat: date
        }
        const ddh_id = ddh.dondathang.data.length + 1;
        await quanlyServices.store('dondathang', newDDH);
        for (let i = 0; i < carts.length; i++) {
          if (carts[i].soluong >= carts[i].soluongton || carts[i].soluongton == 0) {
            alert(` ${carts[i].tensp} số lượng không đủ `);
          } else if (carts[i].soluong < 0) {
            alert(` ${carts[i].tensp} có số lượng âm. vui lòng đặt lại `);
          } else {
            const newCTDDH = {
              masp: carts[i].masp,
              ddh_id: ddh_id,
              soluong: carts[i].soluong,
              dongia: carts[i].gia
            }
            const showSP = await quanlyServices.get(`sanpham/${carts[i].masp}`);
            const editSP = {
              masp: showSP.sanpham[0].masp,
              tensp: showSP.sanpham[0].tensp,
              loaisanpham_id: showSP.sanpham[0].loaisanpham_id,
              mota: showSP.sanpham[0].mota,
              gia: showSP.sanpham[0].gia,
              soluongton: (showSP.sanpham[0].soluongton - carts[i].soluong),
              hinhanh: showSP.sanpham[0].hinhanh,
              tacgia_id: showSP.sanpham[0].tacgia_id,
              nuoc_id: showSP.sanpham[0].nuoc_id,
              thangthaisp: showSP.sanpham[0].thangthaisp,
            };
            await quanlyServices.store('ctddh', newCTDDH);
            await quanlyServices.update(`sanpham/${carts[i].masp}`, editSP);
          }
        }

        localStorage.removeItem("cart");
        localStorage.removeItem("tongtien");
        let path = `/`;
        navigate(path);
      }
    }
  }
  const handleEditFormChange = (e) => {
    e.preventDefault();
    const fieldValue = e.target.value;
    const fieldName = e.target.getAttribute("name");
    setEditFormData({ ...editFormData, [fieldName]: fieldValue });
  };
  return (
    <div className="payment-form m-2">
      <div className="payment-user">
        <div className="user">
          <div className="form-group my-3">
            <label htmlFor="diachi">Địa Chỉ: </label>
            <input className="form-control" id="diachi" name="diachi" type="text" value={editFormData.diachi} onChange={(e) => handleEditFormChange(e)} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="sdt">SĐT: </label>
            <input className="form-control" id="sdt" name="sdt" type="text" value={editFormData.sdt} onChange={(e) => handleEditFormChange(e)} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="ghichu">Ghi Chú: </label>
            <textarea className="form-control" id="ghichu" name="ghichu" rows="4" cols="43" value={editFormData.ghichu} onChange={(e) => handleEditFormChange(e)} />
          </div>
        </div>
      </div>
      <div className="payment-online">
        <div className="payment-tatol">
          <h3>Tổng tiền: {tong}</h3>
        </div>
        <div>
          <button className="payment-button btn btn-info"
            onClick={handleToLogin}>Đặt Hàng</button>
        </div>
      </div>
    </div>

  );
}

export default PayPalCheckout;