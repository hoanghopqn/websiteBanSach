import React, { useEffect, useState } from "react";
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
import "./style.scss";
import NhanVien from "./NhanVien";
import KhachHang from "./KhachHang";
import DSTaiKhoan from "./DSTaiKhoan";
import GiamGia from "./GiamGia";
import PhieuNhap from "./PhieuNhap";
import { FaBookReader, FaUserCog, FaGift, FaEdit } from "react-icons/fa";
import DonDatHang from "./DonDatHang";
import { AiOutlineExport } from "react-icons/ai";
import { BsPlusCircle, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import SortFilter from "../SortFilter";
import Pagination from "../Pagination";
import { getDSTaiKhoanFilterLimit, getDSTaiKhoanFilterPage, getKHFilterLimit, getKHFilterPage, getNFilterLimit, getNFilterPage, getNVFilterLimit, getNVFilterPage, getPNFilterLimit, getPNFilterPage, getSPFilterLimit, getSPFilterPage, getTGFilterLimit, getTGFilterPage } from "../../Actions/sanphamActions";
import SanPham from "./SanPham";
import { useNavigate } from "react-router-dom";
import DetailNhanVien from "./DetailNhanVien";
import DDHComponent from "./DonDatHang/DDHComponent";
import TacGia from "./TacGia";
import NuocSX from "../ShopComponents/NuocSX";
import NuocXuatBan from "./NuocXuatBan";
function QuanLyComponent(props) {
    const [Tabid, SetTabId] = useState(1)
    const initState = useSelector((state) => state.sanpham);
    let navigate = useNavigate();
    const { listNhanVien, listKhachHang, listSanPham, listDSTaiKhoan, listGiamGia, listPhieuNhap, listDDH, listTacGia, listNuoc, } = initState;
    const nameQL = [
        { id: 1, name: 'Thông Tin Cá Nhân', icon: <FaBookReader /> },
        { id: 2, name: 'Quản Lý Sản Phẩm', icon: <FaBookReader /> },
        { id: 3, name: 'Quản Lý Nhân Viên', icon: <FaBookReader /> },
        { id: 4, name: 'Quản Lý Khách Hàng', icon: <FaUserCog /> },
        { id: 5, name: 'Danh Sách Tài Khoản', icon: <FaUserCog /> },
        { id: 6, name: 'Quản Lý Giảm Giá', icon: <FaGift /> },
        { id: 7, name: 'Quản Lý Phiếu Nhập', icon: <FaUserCog /> },
        { id: 8, name: 'Quản Lý Đơn Đặt Hàng', icon: <FaUserCog /> },
        { id: 9, name: 'Quản Lý Tác Giả', icon: <FaUserCog /> },
        { id: 10, name: 'Quản Lý Nước', icon: <FaUserCog /> },];
    const nhanvien = JSON.parse(localStorage.getItem("nhanvien"));
    const urlImg = `/images/${nhanvien.user.hinhanh != null ? nhanvien.user.hinhanh : "user"
        }.jpg`;
    useEffect(() => {

    }, []);
    const handlex = () => {
        localStorage.removeItem("nhanvien");
        let path = `/login`;
        navigate(path);

    }
    return (
        <div className="feature">
            <div className="feature-btn">
                <div className="user">
                    <img className="user-image" alt="" src={urlImg} />
                    <p className="user-text">{nhanvien.user.hoten}</p>
                </div>
                <Button className={Tabid === nameQL[0].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[0].id) }}>
                    <p>{nameQL[0].icon}    {nameQL[0].name}</p>
                    {Tabid === nameQL[0].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
                <Button className={Tabid === nameQL[1].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[1].id) }}>
                    <p>{nameQL[1].icon}    {nameQL[1].name}</p>
                    {Tabid === nameQL[1].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
                {nhanvien.quyen == 3 && <Button className={Tabid === nameQL[2].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[2].id) }}>
                    <p>{nameQL[2].icon}    {nameQL[2].name}</p>
                    {Tabid === nameQL[2].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>}
                {nhanvien.quyen == 3 && <Button className={Tabid === nameQL[3].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[3].id) }}>
                    <p>{nameQL[3].icon}    {nameQL[3].name}</p>
                    {Tabid === nameQL[3].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>}
                {nhanvien.quyen == 3 && <Button className={Tabid === nameQL[4].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[4].id) }}>
                    <p>{nameQL[4].icon}    {nameQL[4].name}</p>
                    {Tabid === nameQL[4].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>}
                <Button className={Tabid === nameQL[5].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[5].id) }}>
                    <p>{nameQL[5].icon}    {nameQL[5].name}</p>
                    {Tabid === nameQL[5].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
                <Button className={Tabid === nameQL[6].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[6].id) }}>
                    <p>{nameQL[6].icon}    {nameQL[6].name}</p>
                    {Tabid === nameQL[6].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
                <Button className={Tabid === nameQL[7].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[7].id) }}>
                    <p>{nameQL[7].icon}    {nameQL[7].name}</p>
                    {Tabid === nameQL[7].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
                <Button className={Tabid === nameQL[8].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[8].id) }}>
                    <p>{nameQL[8].icon}    {nameQL[8].name}</p>
                    {Tabid === nameQL[8].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
                <Button className={Tabid === nameQL[9].id ? "active" : ""}
                    onClick={() => { SetTabId(nameQL[9].id) }}>
                    <p>{nameQL[9].icon}    {nameQL[9].name}</p>
                    {Tabid === nameQL[9].id ? <BsChevronRight /> : <BsChevronLeft />}
                </Button>
            </div>
            <TabContent activetab={Tabid}>
                <div className="btn-close">
                    <button onClick={handlex}><piOutlineExport /></button>
                </div>
                <TabPane className={Tabid === 1 ? "" : "none"} tabid="1">
                    <h1>{nameQL[Tabid - 1].name}</h1>
                    <DetailNhanVien />
                </TabPane>
                <TabPane className={Tabid === 2 ? "" : "none"} tabid="2">
                    <h1>{nameQL[Tabid - 1].name}</h1>
                    <SanPham sanpham={listSanPham.listSanPhamdata} lengthma={listSanPham.meta.total} />
                    <Pagination getFilterLimit={getSPFilterLimit} getFilterPage={getSPFilterPage} meta={listSanPham.meta} />
                </TabPane>
                <TabPane className={Tabid === 3 ? "" : "none"} tabid="3">
                    {nhanvien.quyen == 3 && <> <h1>{nameQL[2].name}</h1>
                        <NhanVien nhanvien={listNhanVien.listNhanViendata} dstaiKhoan={listDSTaiKhoan} />
                        <Pagination getFilterLimit={getNVFilterLimit} getFilterPage={getNVFilterPage} meta={listNhanVien.meta} /></>}
                </TabPane>
                <TabPane className={Tabid === 4 ? "" : "none"} tabid="4">
                    <h1>{nameQL[Tabid - 1].name}</h1>
                    {nhanvien.quyen == 3 && <> <KhachHang khachhang={listKhachHang.listKhachHangdata} dstaiKhoan={listDSTaiKhoan} />
                        <Pagination getFilterLimit={getKHFilterLimit} getFilterPage={getKHFilterPage} meta={listKhachHang.meta} /></>}
                </TabPane>
                <TabPane className={Tabid === 5 ? "" : "none"} tabid="5">
                    {nhanvien.quyen == 3 && <><h1>{nameQL[Tabid - 1].name}</h1>
                        <DSTaiKhoan dstaiKhoan={listDSTaiKhoan.listDSTaiKhoandata} />
                        <Pagination getFilterLimit={getDSTaiKhoanFilterLimit} getFilterPage={getDSTaiKhoanFilterPage} meta={listDSTaiKhoan.meta} /></>}
                </TabPane>
                <TabPane className={Tabid === 6 ? "" : "none"} tabid="6">
                    <GiamGia giamgia={listGiamGia} nhanvienid={nhanvien.user.id} hotenid={nhanvien.user.hoten} />
                </TabPane>
                <TabPane className={Tabid === 7 ? "" : "none"} tabid="7">
                    <PhieuNhap phieunhap={listPhieuNhap.listPhieuNhapdata} />
                    <Pagination getFilterLimit={getPNFilterLimit} getFilterPage={getPNFilterPage} meta={listPhieuNhap.meta} />
                </TabPane>
                <TabPane className={Tabid === 8 ? "" : "none"} tabid="8">
                    <DDHComponent dsdondathang={listDDH.listDDHdata}
                        filterDDHs={listDDH.filter} nhanvienid={nhanvien.user.id} />
                </TabPane>
                <TabPane className={Tabid === 9 ? "" : "none"} tabid="8">
                    <TacGia tacgia={listTacGia.listTacGiadata} />
                    <Pagination getFilterLimit={getTGFilterLimit} getFilterPage={getTGFilterPage} meta={listTacGia.meta} />
                </TabPane>
                <TabPane className={Tabid === 10 ? "" : "none"} tabid="8">
                    <NuocXuatBan nuoc={listNuoc.listNuocdata} />
                    <Pagination getFilterLimit={getNFilterLimit} getFilterPage={getNFilterPage} meta={listNuoc.meta} />
                </TabPane>
            </TabContent>
        </div>
    );
}

export default QuanLyComponent;
