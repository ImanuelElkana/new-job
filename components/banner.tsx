'use client'
import Image from "next/image";
import { IconArrowDown, IconDollar, IconFlag } from "./utilits/icon";

const Banner = () => {
    const images = [1, 2, 3];

    return (
        <div className="mt-2 sm:mt-10 lg:mt-0">
            <div className="w-fit mx-auto mb-2 lg:mb-10 animate-fadeIn">
                <div className="rounded-lg relative flex text-[#00C696] bg-white p-2 text-lg lg:text-2xl font-bold w-fit h-fit  animate-fadeIn">
                    <IconDollar />
                    <span>월 100만원</span>
                </div>
                <IconArrowDown className="h-5 mx-auto -mt-1 w-5 animate-fadeIn " />
            </div>
            <div className="relative flex justify-center gap-10 animate-fadeIn">
                {images.map((row, index) => (
                    index === 1 ? <div key={index} className="absolute border p-6 bg-white shadow-xl rounded-xl">
                        <div className=" lg:py-10  sm:w-60 lg:w-80  relative rounded-xl">
                            <div className="flex flex-row w-full justify-center">
                                <Image alt={row.toString()} src={'/asset/avatar.png'} width={80} height={80} />
                                <IconFlag className="mt-16 -ml-6 bg-blue-300" />
                            </div>
                            <p className="font-[1000] text-black text-xl lg:text-3xl mt-3 text-center">Abhishek Gupta</p>
                            <p className="text-md lg:text-xl text-[#4A77FF] font-semibold text-center">마케팅 · 2y+</p>
                            <p className="mt-10 border w-fit p-2 rounded-md mx-auto">마케팅 콘텐츠 제작</p>
                            <p className="mt-2 border w-fit p-2 rounded-md mx-auto">인스타그램 관리</p>
                            <div className="flex gap-2 mt-2 justify-center">
                                <p className="mt-2 border w-fit p-2 rounded-md">트위터 관리</p>
                                <p className="mt-2 border w-fit p-2 rounded-md">블로그 글 작성</p>
                            </div>
                        </div>
                    </div> :  <div key={index} className="sm:w-60 h-80 lg:h-96 overflow-hidden lg:w-80 p-5 lg:p-10 bg-white mt-10 lg:mt-16 rounded-xl flex flex-col justify-center items-center">
                        <div className="flex flex-row w-full justify-center">
                                <Image alt={row.toString()} src={'/asset/avatar.png'} width={80} height={80} />
                                <IconFlag className="mt-16 -ml-6 bg-blue-300" />
                            </div>
                            <p className="font-[1000] text-black text-xl lg:text-3xl mt-3 text-center">Abhishek Gupta</p>
                            <p className="text-md lg:text-xl text-[#4A77FF] font-semibold text-center">마케팅 · 2y+</p>
                            <p className="mt-10 border w-fit p-2 rounded-md mx-auto">마케팅 콘텐츠 제작</p>
                            <p className="mt-2 border w-fit p-2 rounded-md mx-auto">인스타그램 관리</p>
                            <div className="flex gap-2 mt-2 justify-center">
                                <p className="mt-2 border w-fit p-2 rounded-md">트위터 관리</p>
                                <p className="mt-2 border w-fit p-2 rounded-md">블로그 글 작성</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;