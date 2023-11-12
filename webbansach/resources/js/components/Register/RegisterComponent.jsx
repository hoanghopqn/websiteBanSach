import React, { useState } from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import * as quanlyServices from '../../apiServices/quanlyServices';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
  const [hide, setHided] = useState(false);
  const [Rhide, setRHided] = useState(false);
  const [errorsss, setErrorsss] = useState('0');
  let navigate = useNavigate();

  const handlHide = () => {
    setHided(!hide);
  }
  const handlRHide = () => {
    setRHided(!Rhide);
  }
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = async (data) => {
    const newKH = {
      hoten: data.hoten,
      diachi: data.diachi,
      sdt: data.sdt,
      taikhoan: data.taikhoan,
      email: data.email,
      ngaysinh: data.ngaysinh,
      thangthai: 1
    };
    const createTK = {
      taikhoan: data.taikhoan,
      matkhau: data.matkhau,
      quyen_id: 2,
      thangthai: 1
    };

    var checkExist = false;
    await quanlyServices.get('dstaikhoan', data.taikhoan)
      .then((res) => {
        res.dstaikhoan.data.map((tk) => {
          if (tk.taikhoan == newKH.taikhoan) {
            checkExist = true;
          }
        })
        console.log(res)
      });

    if (checkExist) {
      setErrorsss('1');
    } else {
      await quanlyServices.store('dstaikhoan', createTK);
      await quanlyServices.store('khachhang', newKH);
      const result = await quanlyServices.store("/login", { taikhoan: data.taikhoan, matkhau: data.matkhau });
      localStorage.setItem("user", JSON.stringify(result.user));
      let path = `/`;
      navigate(path);
    }
  }

  return (
    // <div className='form-register'>
    //   <div className='form-content'>
    //     <a className='text'>Đăng Ký</a>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div className='form-item-group my-3'>
    //         <label>Username:</label>
    //         <input className={errors.taikhoan && 'error-input'} type='text' placeholder='enter taikhoan...' {...register('taikhoan', { required: true })} />
    //         {errors.taikhoan && <p className='errors-star'>*</p>}
    //         {errors.taikhoan && <span className='errors'>username is required</span>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         <label>HoTen:</label>
    //         <input className={errors.hoten && 'error-input'} type='text' placeholder='enter hoten...' {...register('hoten', { required: true })} />
    //         {errors.hoten && <p className='errors-star'>*</p>}
    //         {errors.hoten && <span className='errors'>hoten is required</span>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         <label>DiaChi:</label>
    //         <input className={errors.diachi && 'error-input'} type='text' placeholder='enter diachi...' {...register('diachi', { required: true })} />
    //         {errors.diachi && <p className='errors-star'>*</p>}
    //         {errors.diachi && <span className='errors'>dia chi is required</span>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         <label>SDT:</label>
    //         <input className={errors.sdt && 'error-input'} type='text' placeholder='enter sdt...' {...register('sdt', { required: true })} />
    //         {errors.sdt && <p className='errors-star'>*</p>}
    //         {errors.sdt && <span className='errors'>sdt is required</span>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         <label>Email:</label>
    //         <input className={errors.email && 'error-input'} type='text' placeholder='enter email...' {...register('email', {
    //           required: true,
    //           pattern: {
    //             message: "invalid email",
    //             value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //           }
    //         })} />
    //         {errors.email && <p className='errors-star'>*</p>}
    //         {errors.email?.type === 'required' && <span className='errors'>Email is required</span>}
    //         {errors.email?.type === 'pattern' && <span className='errors'>{errors.email?.message}</span>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         <label>Ngày Sinh:</label>
    //         <input className={errors.ngaysinh && 'error-input'} type='date' placeholder='enter ngaysinh...' {...register('ngaysinh', { required: true })} />
    //         {errors.ngaysinh && <p className='errors-star'>*</p>}
    //         {errors.ngaysinh && <span className='errors'>ngay sinh is required</span>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         {!hide ? <>
    //           <label>Password:</label>
    //           <input className={errors.matkhau && 'error-input'} type='password' placeholder='enter matkhau...' {...register('matkhau', {
    //             required: true,
    //             minLength: 8
    //           })} />
    //           {errors.matkhau && <p className='errors-star'>*</p>}
    //           {errors.matkhau?.type === 'required' && <span className='errors'>matkhau is required</span>}
    //           {errors.matkhau?.type === 'minLength' && <span className='errors'>password should be at least 8 characters</span>}
    //           <p onClick={handlHide} className='btn-hide '><BsFillEyeFill /></p>
    //         </> : <>
    //           <label>Password:</label>
    //           <input className={errors.matkhau && 'error-input'} type='text' placeholder='enter matkhau...' {...register('matkhau', { required: true, minLength: 8 })} />
    //           {errors.matkhau && <p className='errors-star'>*</p>}
    //           {errors.matkhau?.type === 'required' && <span className='errors'>matkhau is required</span>}
    //           {errors.matkhau?.type === 'minLength' && <span className='errors'>password should be at least 8 characters</span>}
    //           <p onClick={handlHide} className='btn-hide'><BsFillEyeSlashFill /></p>
    //         </>}
    //       </div>
    //       <div className='form-item-group my-3'>
    //         {!Rhide ? <>
    //           <label>RetypePassword:</label>
    //           <input className={errors.RetypePassword && 'error-input'} type='password' placeholder='enter RetypePassword...' {...register('RetypePassword', {
    //             required: true, minLength: 8, validate: (value) => {
    //               const password = getValues('matkhau');
    //               if (value !== password) {
    //                 return 'Password isi not matched';
    //               }
    //             }
    //           })} />
    //           {errors.RetypePassword && <p className='errors-star'>*</p>}
    //           {errors.RetypePassword?.type === 'required' && <span className='errors'>password is required</span>}
    //           {errors.RetypePassword?.type === 'minLength' && <span className='errors'>password should be at least 8 characters</span>}
    //           {errors.RetypePassword?.message && <span className='errors'>{errors.RetypePassword?.message}</span>}
    //           <p onClick={handlRHide} className='btn-hide '><BsFillEyeFill /></p>
    //         </> : <>
    //           <label>RetypePassword:</label>
    //           <input className={errors.RetypePassword && 'error-input'} type='text' placeholder='enter RetypePassword...' {...register('RetypePassword', {
    //             required: true, minLength: 8, validate: (value) => {
    //               const password = getValues('matkhau');
    //               if (value !== password) {
    //                 return 'Password is not matched';
    //               }
    //             }
    //           })} />
    //           {errors.RetypePassword && <p className='errors-star'>*</p>}
    //           {errors.RetypePassword?.type === 'required' && <span className='errors'>password is required</span>}
    //           {errors.RetypePassword?.type === 'minLength' && <span className='errors'>password should be at least 8 characters</span>}
    //           {errors.RetypePassword?.message && <span className='errors'>{errors.RetypePassword?.message}</span>}
    //           <p onClick={handlRHide} className='btn-hide'><BsFillEyeSlashFill /></p>
    //         </>}
    //       </div>
    //       <button>Register</button>
    //     </form>
    //   </div>
    // </div>

    <div className='wrapper-form-register d-flex justify-content-center my-5'>
      <div className='form-content border rounded p-4 w-50'>
        <h3 className='text-center'>Đăng Ký</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-item-group my-3'>
            <label>Username:</label>
            <input className="form-control rounded" type='text' placeholder='enter taikhoan...' {...register('taikhoan', { required: true })} />
            <div className='message-error-group'>
              {errors.taikhoan && <span className='errors text-danger'>username is required</span>}
              {errorsss == '1' && <span className='errors text-danger'>username is exist</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>HoTen:</label>
            <input className="form-control rounded" type='text' placeholder='enter hoten...' {...register('hoten', { required: true })} />
            <div className='message-error-group'>
              {errors.hoten && <span className='errors text-danger'>hoten is required</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>DiaChi:</label>
            <input className="form-control rounded" type='text' placeholder='enter diachi...' {...register('diachi', { required: true })} />
            <div className='message-error-group'>
              {errors.diachi && <span className='errors text-danger'>dia chi is required</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>SDT:</label>
            <input className="form-control rounded" type='text' placeholder='enter sdt...' {...register('sdt', { required: true })} />
            <div className='message-error-group'>
              {errors.sdt && <span className='errors text-danger'>sdt is required</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>Email:</label>
            <input className="form-control rounded" type='text' placeholder='enter email...' {...register('email', {
              required: true,
              pattern: {
                message: "invalid email",
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              }
            })} />
            <div className='message-error-group'>
              {errors.email?.type === 'required' && <span className='errors text-danger'>Email is required</span>}
              {errors.email?.type === 'pattern' && <span className='errors text-danger'>{errors.email?.message}</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>Ngày Sinh:</label>
            <input className="form-control rounded" type='date' placeholder='enter ngaysinh...' {...register('ngaysinh', { required: true })} />
            <div className='message-error-group'>
              {errors.ngaysinh && <span className='errors text-danger'>ngay sinh is required</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>Password:</label>
            <div className='wrapper-password position-relative'>
              <input className="form-control rounded pe-5" type={hide ? 'text' : 'password'} placeholder='enter matkhau...' {...register('matkhau', {
                required: true,
                minLength: 8
              })} />
              <div onClick={handlHide} className='btn-hide position-absolute'>{hide ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</div>
            </div>
            <div className='message-error-group'>
              {errors.matkhau?.type === 'required' && <span className='errors text-danger'>matkhau is required</span>}
              {errors.matkhau?.type === 'minLength' && <span className='errors text-danger'>password should be at least 8 characters</span>}
            </div>
          </div>
          <div className='form-item-group my-3'>
            <label>RetypePassword:</label>
            <div className='wrapper-password position-relative'>
              <input className="form-control  rounded pe-5" type={Rhide ? 'text' : 'password'} placeholder='enter RetypePassword...' {...register('RetypePassword', {
                required: true, minLength: 8, validate: (value) => {
                  const password = getValues('matkhau');
                  if (value !== password) {
                    return 'Password isi not matched';
                  }
                }
              })} />
              <div onClick={handlRHide} className='btn-hide position-absolute'> {Rhide ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</div>
            </div>

            <div className='message-error-group'>
              {errors.RetypePassword?.type === 'required' && <span className='errors text-danger'>password is required</span>}
              {errors.RetypePassword?.type === 'minLength' && <span className='errors text-danger'>password should be at least 8 characters</span>}
              {errors.RetypePassword?.message && <span className='errors text-danger'>{errors.RetypePassword?.message}</span>}
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-info w-50'>Register</button>
          </div>
        </form>
      </div >
    </div >
  )
}
export default RegisterComponent;
