import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";

const EditPN = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  return (

    <tr>
      <td scope="row">
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter ma phieu nhap..."
          name="maphieunhap"
          value={editFormData.maphieunhap}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a nhanvien_id..."
          name="nhanvien_id"
          value={editFormData.nhanvien_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="date"
          required="required"
          placeholder="Enter a ngaynhap..."
          name="ngaynhap"
          value={editFormData.ngaynhap}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="number"
          required="required"
          placeholder="Enter a tongtien..."
          name="tongtien"
          value={editFormData.tongtien}
          onChange={handleEditFormChange}
        ></input>
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

export default EditPN;
