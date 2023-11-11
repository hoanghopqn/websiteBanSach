import React, { useEffect, useState } from "react";
import * as quanlyServices from '../../../apiServices/quanlyServices';
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDonDatHang, getUerDDHLink } from "../../../Actions/sanphamActions";
import DanhGia from "../DanhGia";
function SanPhamDDH(props) {
  const { nameTT, id } = props;
  const userDDH = useSelector((state) => state.sanpham.listUserDDH.listUserDDHdata);

  const dispatch = useDispatch();
  const handleEditClick = async (e, dondathang, trangthai) => {
    e.preventDefault();

    const formValues = {
      id: dondathang.id,
      khachhang_id: dondathang.khachhang_id,
      nhanvien_id: dondathang.nhanvien_id,
      diachi: dondathang.diachi,
      sdt: dondathang.sdt,
      ghichu: dondathang.ghichu,
      thangthai: trangthai,
      tongtien: dondathang.tongtien,
      thoigiandat: dondathang.thoigiandat,
    };

    // const result = await quanlyServices.get(`ctgg/${listds.idGG}`);
    await quanlyServices.update(`dondathang/${dondathang.id}`, formValues);
    const result = await quanlyServices.get(`dondathangbytt/${dondathang.thangthai}`);
    dispatch(getDonDatHang(result.dondathang.data));

  };
  return (
    <div className="detailSP">
      {userDDH ? userDDH.map((DDH, index) => {
        return (
          <div className="userDDH" key={index}>
            <div className="ctddh-detail">
              {DDH.ctddh ? DDH.ctddh.map((ctddh, index) => {
                return (
                  <div className="ctddh" key={index}>
                    <img alt="product-image" src={`/images/${ctddh.hinhanh}.jpg`} />
                    <p>{ctddh.tensp}</p>
                    <p>{ctddh.soluong}</p>
                    <p>{ctddh.dongia}</p>
                  </div>);
              }) : <div></div>}
            </div>
            <p>{DDH.diachi}</p>
            <p>{DDH.thoigiandat}</p>
            <p>{DDH.tongtien}</p>
            <p>{nameTT}</p>
            {id == 1 && <button className="btn btn-warning" onClick={(e) => handleEditClick(e, DDH, 4)}>Hủy</button>}
            {id == 4 && <button className="btn btn-info" onClick={(e) => handleEditClick(e, DDH, 1)}>Đặt Lại</button>}   </div>);
      }) : <div></div>}

    </div>

  );
}

export default SanPhamDDH;
