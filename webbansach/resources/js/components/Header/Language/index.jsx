import React from "react";
import './style.scss'
import { AiOutlineDown, AiOutlineGlobal } from "react-icons/ai";

function Language({ handleClick, handleBlur, Hide, setHide }) {

    return (
        <div className='language d-flex justify-content-center' onClick={() => setHide({ ...Hide, language: !Hide.language })}  >
            <div className='icon-action d-flex justify-content-center align-items-center mx-1'><AiOutlineGlobal /> </div>
            <div className='text-action d-flex justify-content-center align-items-center mx-1'><span>{Hide.Country}</span></div>
            <div className='page-language' style={Hide.language ? { display: 'none' } : { display: 'block' }}  >
                <div className='language-menu '>
                    <div className={Hide.Country === 'VN' ? 'language-button btn-item-language active' : 'language-button btn-item-language'} onClickCapture={() => setHide({ ...Hide, Country: 'VN' })}>
                        <span>VN</span>
                    </div>
                </div>
                <div className='language-menu '>
                    <div className={Hide.Country === 'ENG' ? 'language-button btn-item-language active' : 'language-button btn-item-language'} onClickCapture={() => setHide({ ...Hide, Country: 'ENG' })}>
                        <span>ENG</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Language;
