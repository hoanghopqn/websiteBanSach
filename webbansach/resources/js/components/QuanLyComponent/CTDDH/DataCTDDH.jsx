import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const DataCTDDH = ({ ctddh, index }) => {

  return (

    <tr key={index}>
      <td scope="row">
        {index}
      </td>
      <td scope="row">
        {ctddh.masp}
      </td>
      <td>
        {ctddh.ddh_id}
      </td>
      <td>
        {ctddh.soluong}
      </td>
      <td>
        {ctddh.dongia}
      </td>
      <td>
        <button
          className="btn btn-info m-2"
          type="button"
        >
          <AiOutlineEdit />
        </button>
        <button className="btn btn-danger m-2" type="button" >
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default DataCTDDH;
