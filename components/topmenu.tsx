'use client'
import React, { useState } from 'react';
import { IconLogo } from './utilits/icon';

const TopMenu: React.FC = () => {
    const [subMenu, setSubMenu] = useState<boolean>(false)
    const menus = ["해외 개발자 원격 채용", "외국인 원격 채용 (비개발 직군)", "한국어 가능 외국인 채용"]
    
    return (
        <div className="fixed top-0 left-0 w-full p-6">
            <div className="container mx-auto flex text-white font-bold justify-between items-center">
                <div className="text-white text-lg font-bold"><IconLogo /></div>
                <div className='hidden sm:flex gap-9'>
                    <div className='flex gap-1 items-center cursor-pointer' onClick={() => setSubMenu(!subMenu)}>
                        <span>채용</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.90629 6.33336C5.77494 6.33362 5.64849 6.28351 5.55296 6.19336L0.806295 1.44002C0.75717 1.39425 0.717769 1.33905 0.690441 1.27772C0.663113 1.21638 0.648418 1.15017 0.647234 1.08304C0.646049 1.0159 0.658399 0.949218 0.683546 0.886959C0.708694 0.824701 0.746123 0.768144 0.793603 0.720665C0.841082 0.673186 0.897638 0.635757 0.959896 0.610609C1.02216 0.585462 1.08884 0.573112 1.15598 0.574297C1.22311 0.575481 1.28932 0.590176 1.35065 0.617504C1.41199 0.644832 1.46719 0.684233 1.51296 0.733358L5.91296 5.13336L10.493 0.726691C10.5876 0.634655 10.7143 0.583159 10.8463 0.583159C10.9783 0.583159 11.105 0.634655 11.1996 0.726691C11.2933 0.820441 11.3459 0.947524 11.3459 1.08002C11.3459 1.21252 11.2933 1.33961 11.1996 1.43336L6.26629 6.18669C6.21983 6.23489 6.16381 6.27284 6.10181 6.2981C6.03981 6.32336 5.97321 6.33537 5.90629 6.33336Z" fill="white"/>
                        </svg>
                    </div>
                    {subMenu && <div className={`absolute py-2 bg-white mt-7 text-black rounded-lg`}>
                        <div className='pl-2'>채용</div>
                            {menus.map((col) => (
                                <div key={col} className='font-normal py-1 pl-2 pr-10 hover:bg-blue-200'>{col}</div>
                            ))}
                        </div>
                    }
                    <div>해외 개발자 활용 서비스</div>
                </div>
                <div className='bg-white text-[#4a77ff] py-2 px-5 cursor-pointer rounded-md text-sm'>문의하기</div>
            </div>
        </div>
    );
};

export default TopMenu;