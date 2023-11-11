import React from "react";
import { AiOutlineSave, AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const EditSP = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {

  const filters = useSelector((state) => state.sanpham);
  const { listNuocSXName, listTacGiaName, listTheLoaiName } = filters;
  return (

    <tr>
      <td scope="row">
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a mã Sản Phẩm..."
          name="masp"
          value={editFormData.masp}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a Tên Sản Phẩm..."
          name="tensp"
          value={editFormData.tensp}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select className="select-option form-select" name="loaisanpham_id" defaultValue={editFormData.loaisanpham_id} onChange={handleEditFormChange}>
          {listTheLoaiName.map((theloai, index) => <option key={index} value={theloai.id}>{theloai.id} - {theloai.name}</option>)}
        </select>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a mô tả..."
          name="mota"
          value={editFormData.mota}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="number"
          required="required"
          placeholder="Enter an gia..."
          name="gia"
          value={editFormData.gia}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="number"
          required="required"
          placeholder="Enter a số lượng tồn..."
          name="soluongton"
          value={editFormData.soluongton}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a hinh ảnh..."
          name="hinhanh"
          value={editFormData.hinhanh}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select className="select-option form-select" name="tacgia_id" defaultValue={editFormData.tacgia_id} onChange={handleEditFormChange}>
          {listTacGiaName.map((tacgia, index) => <option key={index} value={tacgia.id}>{tacgia.id} - {tacgia.name}</option>)}
        </select>
      </td>
      <td>
        <select className="select-option form-select" name="nuoc_id" defaultValue={editFormData.nuoc_id} onChange={handleEditFormChange}>
          {listNuocSXName.map((nuoc, index) => <option key={index} value={nuoc.id}>{nuoc.id} - {nuoc.name}</option>)}
        </select>
      </td>
      <td>
        <input className="form-control"
          type="text"
          required="required"
          placeholder="Enter a trang thai..."
          name="thangthaisp"
          value={editFormData.thangthaisp}
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

export default EditSP;
