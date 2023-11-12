// import React, { useEffect, useState } from "react";
// import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
// import "./style.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { getDDHFilterLink, getUerDDHLink } from "../../Actions/sanphamActions";
// import DonDatHang from "../QuanLyComponent/DonDatHang";
// import { useNavigate } from "react-router-dom";
// import SanPhamDDH from "./SanPhamDDH";
// function KhachHangDDH(props) {
//     const [Tabid, SetTabId] = useState(1);
//     const [id, SetId] = useState(1);
//     let navigate = useNavigate();
//     const dispatch = useDispatch();
//     const nameQL = [
//         { id: 1, name: 'Đang Chờ Đuyệt' },
//         { id: 2, name: 'Đang Giao Hàng' },
//         { id: 3, name: 'Hoàn Thành' },
//         { id: 4, name: 'Đã Hủy' },];
//     const hangletab = (ida) => {
//         SetTabId(nameQL[ida].id);
//         SetId(nameQL[ida].id);
//         dispatch(getUerDDHLink(`dondathangbytt/${nameQL[ida].id}`))
//     }
//     return (
//         <div className="feature-ddh">
//             <div className="feature-ddh-btn">
//                 <Button className={Tabid === nameQL[0].id ? "active ddhbtn" : "ddhbtn"}
//                     onClick={() => { hangletab(0) }}>
//                     <p>  {nameQL[0].name}</p>
//                 </Button>
//                 <Button className={Tabid === nameQL[1].id ? "active ddhbtn" : "ddhbtn"}
//                     onClick={() => { hangletab(1) }}>
//                     <p> {nameQL[1].name}</p>
//                 </Button>
//                 <Button className={Tabid === nameQL[2].id ? "active ddhbtn" : "ddhbtn"}
//                     onClick={() => { hangletab(2) }}>
//                     <p>  {nameQL[2].name}</p>
//                 </Button>
//                 <Button className={Tabid === nameQL[3].id ? "active ddhbtn" : "ddhbtn"}
//                     onClick={() => { hangletab(3) }}>
//                     <p> {nameQL[3].name}</p>
//                 </Button>
//             </div>
//             <TabContent activetab={Tabid}>
//                 <TabPane className={Tabid === id ? "" : "none"} tabid="1">
//                     <SanPhamDDH nameTT={nameQL[Tabid - 1].name} id={nameQL[Tabid - 1].id} />
//                 </TabPane>
//             </TabContent>
//         </div>
//     );
// }

// export default KhachHangDDH;


import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUerDDHLink } from "../../Actions/sanphamActions";
import { useNavigate } from "react-router-dom";
import SanPhamDDH from "./SanPhamDDH";
import "./style.scss"

const KhachHangDDH = () => {
    const [activeTab, setActiveTab] = useState("1"); // Set the initial active tab as a string
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameQL = [
        { id: "1", name: 'Đang Chờ Đuyệt' }, // Use string as IDs
        { id: "2", name: 'Đang Giao Hàng' },
        { id: "3", name: 'Hoàn Thành' },
        { id: "4", name: 'Đã Hủy' },
    ];

    const handleTabSelect = (tabId) => {
        setActiveTab(tabId);
        dispatch(getUerDDHLink(`dondathangbytt/${tabId}`));
    };

    return (
        <div className="feature-ddh">
            <Tabs activeKey={activeTab} onSelect={handleTabSelect}
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3">
                {nameQL.map((item) => (
                    <Tab key={item.id} eventKey={item.id} title={item.name}>
                        <SanPhamDDH nameTT={item.name} id={item.id} />
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default KhachHangDDH;

