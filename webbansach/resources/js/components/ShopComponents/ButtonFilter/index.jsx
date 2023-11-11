import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { filterByNuocSX, filterByTacGia, filterByTheLoai, getName } from '../../../Actions/sanphamActions';
import "./style.scss";
function ButtonFilter(props) {
  const dispatch = useDispatch();
  const initState = useSelector((state) => state.sanpham);
  const { listTacGiaName, listTheLoaiName, listNuocSXName, filter } = initState;
  const { nuocsx, tacgia, theloai } = filter;
  const handleClose = (data) => {
    const index = theloai.indexOf(data);
    theloai.splice(index, 1)
    dispatch(filterByTheLoai([...theloai]));
  }
  return (
    <>
      <div className='content-btn'>
        {(theloai.length !== 0 || tacgia || nuocsx) && <div className='tilte-filter'>Loc theo:</div>}
        <div className="filter-style">
          {theloai && theloai.map((theloai, index) => {
            return (
              <Alert key={index} severity="" onClose={(theloai) => handleClose(theloai)}>{getName(listTheLoaiName, theloai).name}</Alert>
            );
          })}
        </div>
        {tacgia && <Alert severity="" onClose={() => dispatch(filterByTacGia(''))}>{getName(listTacGiaName, tacgia).name}</Alert>}
        {nuocsx && <Alert severity="" onClose={() => dispatch(filterByNuocSX(''))}>{getName(listNuocSXName, nuocsx).name}</Alert>}
      </div>
    </>
  );
}
export default ButtonFilter;
