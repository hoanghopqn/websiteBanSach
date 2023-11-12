import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const EditTG = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  const filters = useSelector((state) => state.sanpham);
  const { listNuocSXName } = filters;
  return (

    <tr>
      <td scope="row">
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a mã khách hàng..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a Họ Tên..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a tieu su..."
          name="tieusu"
          value={editFormData.tieusu}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select className="select-option form-select" name="nuoc_id" defaultValue={editFormData.nuoc_id} onChange={handleEditFormChange}>
          {listNuocSXName.map((nuoc, index) => <option key={index} value={nuoc.id}>{nuoc.id} - {nuoc.name}</option>)}
        </select>
      </td>
      <td>
        <button className="btn btn-info" type="submit"><AiOutlineSave /></button>
        <button className="btn btn-warning" type="button" onClick={handleCancelClick}>
          <AiFillCloseCircle />
        </button>
      </td>

    </tr>
  );
};

export default EditTG;
