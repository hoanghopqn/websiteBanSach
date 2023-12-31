// import React, { useEffect, useState } from "react";
// import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
// import "./style.scss";
// import { FaBookReader, FaUserCog, FaGift, FaEdit } from "react-icons/fa";
// import { BsPlusCircle, BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import DetailKhachHang from "../DetailKhachHang";
// import Doimatkhau from "../CartComponents/Doimatkhau";
// import KhachHangDDH from "./KhachHangDDH";
// import { Link } from "react-router-dom";
// function DetailUserKhachHang(props) {
//     const [Tabid, SetTabId] = useState(1)
//     const nameQL = [
//         { id: 1, name: 'Thông Tin Cá Nhân' },
//         { id: 2, name: 'Đơn Mua' },
//         { id: 3, name: 'Đổi Mật Khẩu' },];

//     return (
//         <div className="feature">
//             <div className="feature-btndetail">
//                 <Button className={Tabid === nameQL[0].id ? "active" : ""}
//                     onClick={() => { SetTabId(nameQL[0].id) }}>
//                     <p>{nameQL[0].icon}    {nameQL[0].name}</p>
//                 </Button>
//                 <Button className={Tabid === nameQL[1].id ? "active" : ""}
//                     onClick={() => { SetTabId(nameQL[1].id) }}>
//                     <p>{nameQL[1].icon}    {nameQL[1].name}</p>
//                 </Button>
//                 <Button className={Tabid === nameQL[2].id ? "active" : ""}
//                     onClick={() => { SetTabId(nameQL[2].id) }}>
//                     <p>{nameQL[2].icon}    {nameQL[2].name}</p>
//                 </Button>
//             </div>
//             <TabContent activetab={Tabid}>
//                 <TabPane className={Tabid === 1 ? "" : "none"} tabid="1">
//                     <DetailKhachHang />
//                 </TabPane>
//                 <TabPane className={Tabid === 2 ? "" : "none"} tabid="2">
//                     <Link to='/shop'>  <KhachHangDDH /></Link>
//                 </TabPane>
//                 <TabPane className={Tabid === 3 ? "" : "none"} tabid="3">
//                     <Link to='/doimatkhau'>  <Doimatkhau /></Link>
//                 </TabPane>
//             </TabContent>
//         </div>
//     );
// }

// export default DetailUserKhachHang;

import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { FaBookReader, FaGift, FaEdit } from "react-icons/fa";
import DetailKhachHang from "../DetailKhachHang";
import Doimatkhau from "../CartComponents/Doimatkhau";
import KhachHangDDH from "./KhachHangDDH";
import { Link } from "react-router-dom";

const tabData = [
    { id: 1, name: 'Thông Tin Cá Nhân', icon: <FaBookReader />, component: <DetailKhachHang /> },
    { id: 2, name: 'Đơn Mua', icon: <FaGift />, component: <KhachHangDDH /> },
    { id: 3, name: 'Đổi Mật Khẩu', icon: <FaEdit />, component: <Doimatkhau /> },
];

function DetailUserKhachHang() {
    const [activeTab, setActiveTab] = useState(tabData[0].id);

    return (
        <div className="feature w-100 d-flex">
            <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                {tabData.map((tab) => (
                    <Tab key={tab.id} eventKey={tab.id} title={<p>{tab.icon} {tab.name}</p>}>
                        {tab.component}
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
}

export default DetailUserKhachHang;
