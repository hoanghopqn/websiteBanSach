import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataTG = ({ tacgia, handleEditClick, handleDeleteClick }) => {

  return (
    <tr>
      <td scope="row">
        {tacgia.id}
      </td>
      <td>
        {tacgia.name}
      </td>
      <td>
        {tacgia.tieusu}
      </td>
      <td>
        {tacgia.tennuoc}
      </td>
      <td>
        <button className="btn btn-info"
          type="button"
          onClick={(event) => handleEditClick(event, tacgia)}
        >
          <AiOutlineEdit />
        </button>
        <button className="btn btn-danger" type="button" onClick={() => handleDeleteClick(tacgia.id)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataTG;
