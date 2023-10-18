import React, { useEffect, useState } from 'react' 
import './style.scss'
import { useForm } from 'react-hook-form';
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import * as quanlyServices from '../../apiServices/quanlyServices';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { getUerDDHLink, getUerID, getUserDDH } from '../../Actions/sanphamActions';

const LoginComponent = () => {
    const [hide,setHided]=useState(false);
    const [errorsss,setErrorsss]=useState(false);
    const  {register,handleSubmit, formState:{errors,}}=useForm({
        mode: 'onBlur'
    })
    const dispatch = useDispatch();   
    let navigate = useNavigate();
    const handleToLogin = () => {
    }
    const handlHide = ()=>{
        setHided(!hide);
    }
    const onSubmit =async(data)=>{
      try { 
          const result = await quanlyServices.store("/login", data);    
          setErrorsss(true);
          console.log(result)
          if(result.quyen==2){ 
            setErrorsss(false); 
            localStorage.setItem("user", JSON.stringify(result.user));   
            dispatch(getUerID(result.user.id));
            const where = JSON.parse(localStorage.getItem("where")); 
        if(where==='cart')
        {
          localStorage.removeItem("where"); 
          let path = `/cart`; 
          navigate(path);
        }else{
          let path = `/`; 
          navigate(path);
        }
          }else{
            setErrorsss(false);
            localStorage.setItem("nhanvien", JSON.stringify(result));  
          let path = `/quanly`; 
          navigate(path);} 
        
    } catch (error) { 
    }
    }  
  return ( 
    <>
    <div className='form-login'>
        <div className='form-content'> 
          <a className='text'>Đăng Nhập</a>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='input-gourp'>
                  <label>Username:</label>
                  <input className={errors.taikhoan&&'error-input'} type='text' placeholder='enter taikhoan...' {...register('taikhoan',{required:true})}/>
                  {errors.taikhoan&&<p className='errors-star'>*</p>}
                  {errors.taikhoan&&<span className='errors'>taikhoan is required</span>}
                </div>
                <div className='input-gourp'>
                    {!hide ?<> 
                  <label>Password:</label>
                  <input className={errors.matkhau&&'error-input'} type='password' placeholder='enter matkhau...' {...register('matkhau',{required:true, minLength: 8})} />  
                  {errors.matkhau&&<p className='errors-star'>*</p>}
                  {errors.matkhau?.type==='required'&&<span className='errors'>matkhau is required</span>}
                  {errors.matkhau?.type==='minLength'&&<span className='errors'>password should be at least 8 characters</span>}
                {errorsss&&<span className='errors'>Tài khoản hoặc mật khẩu không đúng</span>}
                  <p onClick={handlHide} className='hide-password '><BsFillEyeFill/></p>
                </>:<>
                  <label>Password:</label>
                  <input className={errors.matkhau&&'error-input'} type='text' placeholder='enter matkhau...' {...register('matkhau',{required:true, minLength: 8})} />  
                  {errors.matkhau&&<p className='errors-star'>*</p>}
                  {errors.matkhau?.type==='required'&&<span className='errors'>matkhau is required</span>}
                  {errors.matkhau?.type==='minLength'&&<span className='errors'>password should be at least 8 characters</span>}
                {errorsss&&<span className='errors'>Tài khoản hoặc mật khẩu không đúng</span>}
                  <p onClick={handlHide} className='hide-password'><BsFillEyeSlashFill/></p>
                </>} 
                <Link className='register' to='/register'>Đăng Ký</Link>
                </div>
                <button>Login</button>
            </form>
        </div>
    </div></>
  )
}
export default LoginComponent;
