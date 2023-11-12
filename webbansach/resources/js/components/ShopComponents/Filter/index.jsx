import React from 'react';
import TacGia from '../TacGia';
import TheLoai from '../TheLoai';
import { useSelector } from 'react-redux';
import NuocSX from '../NuocSX';
function Filter(props) {

  const initState = useSelector((state) => state.sanpham);
  const { listTacGiaName, listTheLoaiName, listNuocSXName } = initState;
  return (
    <>
      <div>
        <h3>Thể Loại</h3>
        <TheLoai nameFilter={listTheLoaiName} />
      </div>
      <div>
        <h3>Tác Giả</h3>
        <TacGia nameFilter={listTacGiaName} />
      </div>
      <div>
        <h3>Nước Sản Xuất</h3>
        <NuocSX nameFilter={listNuocSXName} />
      </div>
    </>
  );
}
export default Filter;
