// import React, { useContext } from 'react';
// import { Button } from 'reactstrap';

// import { TiTick } from "react-icons/ti";
// import "./style.scss";
// import { useDispatch, useSelector } from 'react-redux';
// import { filterByTacGia } from '../../../Actions/sanphamActions';
// function CheckboxTG({ nameFilter }) {
//   const tacgia_ID = useSelector((state) => state.sanpham.filter.tacgia);
//   const dispatch = useDispatch();
//   const { id, name } = nameFilter;

//   return (
//     <div className='checkradio' >
//       <Button
//         color="red"
//         outline
//         onClick={() => { dispatch(filterByTacGia(id)) }}
//         active={tacgia_ID === id}
//       >  <TiTick className={tacgia_ID === id ? 'icon coloricon' : 'icon'} />
//       </Button>
//       <a>{name} </a>
//     </div>
//   );
// }
// export default CheckboxTG;

import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTacGia } from '../../../Actions/sanphamActions';

function CheckboxTG({ nameFilter }) {
  const tacgia_ID = useSelector((state) => state.sanpham.filter.tacgia);
  const dispatch = useDispatch();
  const { id, name } = nameFilter;

  const handleCheckboxChange = () => {
    dispatch(filterByTacGia(id));
  };

  return (
    <div className='checkradio-filter ms-4'>
      <Form.Check
        type="checkbox"
        id={`checkbox-${id}`}
        label={name}
        checked={tacgia_ID === id}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default CheckboxTG;
