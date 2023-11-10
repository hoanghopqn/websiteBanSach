import React, { useEffect, useState } from "react";
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from "react-bootstrap";
import "./style.scss";
import { useDispatch } from "react-redux";
import { getDDHFilterLink } from "../../../Actions/sanphamActions";
import DonDatHang from ".";
function DDHComponent(props) {
    const { dsdondathang, filterDDHs, nhanvienid } = props;
    const [Tabid, SetTabId] = useState(1);
    const [id, SetId] = useState(1);
    const dispatch = useDispatch();
    const nameQL = [
        { id: 0, name: 'Đã Xóa' },
        { id: 1, name: 'Đang Chờ Đuyệt' },
        { id: 2, name: 'Đang Giao Hàng' },
        { id: 3, name: 'Đã Giao' },
        { id: 4, name: 'Bị Hủy' },];
    const hangletab = (ida) => {
        SetTabId(nameQL[ida].id);
        SetId(nameQL[ida].id);
        dispatch(getDDHFilterLink(`dondathangbytt/${ida}`));
    }
    return (
        <div className="feature-ddh">
            <div className="feature-ddh-btn">
                <Button className={Tabid === nameQL[1].id ? "active" : ""}
                    onClick={() => { hangletab(1) }}>
                    <p>  {nameQL[1].name}</p>
                </Button>
                <Button className={Tabid === nameQL[2].id ? "active" : ""}
                    onClick={() => { hangletab(2) }}>
                    <p> {nameQL[2].name}</p>
                </Button>
                <Button className={Tabid === nameQL[3].id ? "active" : ""}
                    onClick={() => { hangletab(3) }}>
                    <p>  {nameQL[3].name}</p>
                </Button>
                <Button className={Tabid === nameQL[4].id ? "active" : ""}
                    onClick={() => { hangletab(4) }}>
                    <p> {nameQL[4].name}</p>
                </Button>
                <Button className={Tabid === nameQL[0].id ? "active" : ""}
                    onClick={() => { hangletab(0) }}>
                    <p> {nameQL[0].name}</p>
                </Button>
            </div>
            <div className="ddh-table">
                <TabContent activetab={Tabid}>
                    <TabPane className={Tabid === id ? "" : "none"} tabid="1">
                        <DonDatHang dsdondathang={dsdondathang}
                            filterDDHs={filterDDHs} nhanvienid={nhanvienid} nameTT={Tabid} />
                    </TabPane>

                </TabContent></div>
        </div>
    );
}

export default DDHComponent;
