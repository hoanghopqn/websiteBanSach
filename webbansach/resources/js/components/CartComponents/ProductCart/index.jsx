// import React, { useState } from "react";
// import "./style.scss";
// import { AiFillDelete } from "react-icons/ai";

// function ProductCart({ cart, setCart, tong, setTong }) {
//   const handlDelete = (total, index) => {
//     const newCart = [...cart];
//     localStorage.setItem("tongtien", JSON.stringify(tong - total));
//     newCart.splice(index, 1);
//     console.log(newCart)
//     localStorage.setItem("cart", JSON.stringify([...newCart]));
//     setCart([...newCart]);
//     setTong(tong - total);
//   }
//   const handlNumber = (cartNumber, number) => {
//     const newNumber = number - cartNumber.soluong;
//     const index = cart.findIndex((cart) => cart.masp === cartNumber.masp);
//     const newCart = [...cart];
//     localStorage.setItem("tongtien", JSON.stringify(tong + (cartNumber.gia * newNumber)));
//     newCart[index] = { ...cartNumber, soluong: number, total: (number * cartNumber.gia) };
//     localStorage.setItem("cart", JSON.stringify([...newCart]));
//     setCart([...newCart]);
//     setTong(tong + (cartNumber.gia * newNumber));

//   }
//   return (
//     <div className="ProductCart">
//       <div className="ProductCart-title">
//         <div className="boder-title">Hình Ảnh</div>
//         <div className="boder-title">Tên Sản Phẩm</div>
//         <div className="boder-title">Số Lượng</div>
//         <div className="boder-title">Giá</div>
//         <div className="boder-title">Tổng Tiền</div>
//         <div className="boder-title"></div>
//       </div>
//       {cart ? cart.map((cart, index) => {
//         return (
//           <div key={index} className="Cart-Product">
//             <img alt="" src={`/images/${cart.hinhanh}.jpg`} />
//             <div className="ten">{cart.tensp}</div>
//             <div className="soluong">
//               <div className="button-soluong">
//                 <input type="button" value='+' onClick={() => handlNumber(cart, cart.soluong + 1)} />
//                 <div className="button-number">{cart.soluong}</div>
//                 <input type="button" value='-' onClick={() => handlNumber(cart, cart.soluong - 1)} />
//               </div>
//             </div>tr
//             <div className="gia">{cart.gia}</div>
//             <div className="total">{cart.total}</div>
//             <AiFillDelete className="delete" onClick={() => handlDelete(cart.total, index)} />
//           </div>
//         );
//       }) : <div className="Cart-Product">  </div>}
//     </div>

//   );
// }

// export default ProductCart;

import React, { useState } from "react";
import "./style.scss";
import { AiFillDelete } from "react-icons/ai";

function ProductCart({ cart, setCart, tong, setTong }) {

  const handleDelete = (total, index) => {
    const newCart = [...cart];
    localStorage.setItem("tongtien", JSON.stringify(tong - total));
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify([...newCart]));
    setCart([...newCart]);
    setTong(tong - total);
  }
  const handleNumber = (cartNumber, number) => {
    if (number > 0) {
      const newNumber = (number - cartNumber.soluong);
      const index = cart.findIndex((item) => item.masp === cartNumber.masp);
      const newCart = [...cart];
      localStorage.setItem("tongtien", JSON.stringify(tong + (cartNumber.gia * newNumber)));
      newCart[index] = { ...cartNumber, soluong: number, total: (number * cartNumber.gia) };
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      setCart([...newCart]);
      setTong(tong + (cartNumber.gia * newNumber));
    }
  }


  return (
    <div className="prouct-cart m-2 w-75">
      <table className="table">
        <thead>
          <tr>
            <th class="text-center align-middle" scope="col">Hình Ảnh</th>
            <th class="text-center align-middle" scope="col">Tên Sản Phẩm</th>
            <th class="text-center align-middle" scope="col">Số Lượng</th>
            <th class="text-center align-middle" scope="col">Giá</th>
            <th class="text-center align-middle" scope="col">Tổng Tiền</th>
            <th class="text-center align-middle" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart ? cart.map((item, index) => (
            <tr key={index} scope="row">
              <td className="align-middle">
                <div class="text-center">
                  <img src={`/images/${item.hinhanh}.jpg`} class="img-fluid" alt="..." />
                </div>
              </td>
              <td className="align-middle">
                <div class="">{item.tensp}</div>
              </td>
              <td className="align-middle">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-warning mx-2" onClick={() => handleNumber(item, item.soluong - 1)}>-</button>
                  <div className="text-primary mx-2">{item.soluong}</div>
                  <button className="btn btn-info mx-2" onClick={() => handleNumber(item, item.soluong + 1)}>+</button>
                </div>
              </td>
              <td className="align-middle">
                <div className="">{item.gia}</div>
              </td>
              <td className="align-middle">
                <div className="">{item.total}</div>
              </td>
              <td className="align-middle">
                <div className="">
                  <AiFillDelete className="delete" onClick={() => handleDelete(item.total, index)} />
                </div>
              </td>
            </tr>
          )) : <tr><td className="" colSpan="6">No items in the cart.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export default ProductCart;
