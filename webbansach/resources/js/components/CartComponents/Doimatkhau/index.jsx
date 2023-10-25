import React, { useState } from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import * as quanlyServices from '../../../apiServices/quanlyServices';

const Doimatkhau = () => {
  const [hide, setHided] = useState(false);
  const [Rhide, setRHided] = useState(false);
  const [Khide, setKhide] = useState(false);
  let navigate = useNavigate();
  const handlHide = () => {
    setHided(!hide);
  }
  const handlRHide = () => {
    setRHided(!Rhide);
  }
  const handlKhide = () => {
    setKhide(!Khide);
  }
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = async (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const createTK = {
      taikhoan: user.taikhoan,
      matkhau: data.matkhaumoi,
      quyen_id: 2,
      thangthai: 1
    };
    await quanlyServices.update(`dstaikhoan/${user.taikhoan}`, createTK);
    let path = `/`;
    navigate(path);
    // localStorage.removeItem("user"); 
  }

  return (
    <div className='wrapper-form-change-password d-flex justify-content-center my-5'>
      <div className='form-content form-content border rounded p-4 w-50'>
        <h3 className='text'>Đổi mật khẩu</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-item-group my-3'>
            <label>Mạt Khẩu cũ:</label>
            <div className='wrapper-password position-relative'>
              <input className="form-control" type={Khide ? 'text' : 'password'} placeholder='enter matkhau...' {...register('matkhaucu', { required: true })} />
              <div onClick={handlKhide} className='btn-hide position-absolute'>{Khide ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</div>
            </div>
            <div className='message-error-group'>
              {errors.matkhaucu && <span className='errors text-danger'>matkhau is required</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>Mật khẩu mới:</label>
            <div className='wrapper-password position-relative'>
              <input className="form-control" type={hide ? 'text' : 'password'} placeholder='enter matkhaumoi...' {...register('matkhaumoi', {
                required: true, minLength: 3, validate: (value) => {
                  const password = getValues('matkhaucu');
                  if (value === password) {
                    return 'Mật khẩu cũ và Mật khẩu mới không được trùng nhau';
                  }
                }
              })} />
              <div onClick={handlHide} className='btn-hide position-absolute '>{hide ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</div>
            </div>
            <div className='message-error-group'>
              {errors.matkhaumoi?.type === 'required' && <span className='errors text-danger'>password is required</span>}
              {errors.matkhaumoi?.type === 'minLength' && <span className='errors text-danger'>password should be at least 3 characters</span>}
              {errors.matkhaumoi?.message && <span className='errors text-danger'>{errors.matkhaumoi?.message}</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>RetypePassword:</label>
            <div className='wrapper-password position-relative'>
              <input className="form-control" type={Rhide ? 'text' : 'password'} placeholder='enter RetypePassword...' {...register('RetypePassword', {
                required: true, minLength: 3, validate: (value) => {
                  const password = getValues('matkhaumoi');
                  if (value !== password) {
                    return 'Password isi not matched';
                  }
                }
              })} />
              <div onClick={handlRHide} className='btn-hide position-absolute '>{Rhide ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</div>
            </div>
            <div className='message-error-group'>
              {errors.RetypePassword?.type === 'required' && <span className='errors text-danger'>password is required</span>}
              {errors.RetypePassword?.type === 'minLength' && <span className='errors text-danger'>password should be at least 3 characters</span>}
              {errors.RetypePassword?.message && <span className='errors text-danger'>{errors.RetypePassword?.message}</span>}
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-info w-50'>Update password</button>
          </div>
        </form>
      </div >
    </div >
  )
}
export default Doimatkhau;
