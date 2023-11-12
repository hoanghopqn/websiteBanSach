import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";
const DataNV = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  return (

    <tr>
      <td scope="row">
        <input
          className="form-control"
          type="text"
          required="required"
          placeholder="Enter a mã nhân viên..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required="required"
          placeholder="Enter a hoten..."
          name="hoten"
          value={editFormData.hoten}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required="required"
          placeholder="Enter a sdt..."
          name="sdt"
          value={editFormData.sdt}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required="required"
          placeholder="Enter a dia chi..."
          name="diachi"
          value={editFormData.diachi}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          required="required"
          placeholder="Enter a ngaysinh..."
          name="ngaysinh"
          value={editFormData.ngaysinh}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="date"
          required="required"
          placeholder="Enter a ngayvaolam..."
          name="ngayvaolam"
          value={editFormData.ngayvaolam}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required="required"
          placeholder="Enter a taikhoan..."
          name="taikhoan"
          value={editFormData.taikhoan}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          required="required"
          placeholder="Enter a hinhanh..."
          name="hinhanh"
          value={editFormData.hinhanh}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button className="btn btn-info m-2" type="submit"><AiOutlineSave /></button>
        <button className="btn btn-warning m-2" type="button" onClick={handleCancelClick}>
          <AiFillCloseCircle />
        </button>
      </td>
    </tr>
  );
};

export default DataNV;
