'use client'
import Slider from "react-slick";
import { Icon1, Icon2, Icon3, Icon4, Icon5, IconChecklist } from "./utilits/icon";

const MovingText = () => {
    const dataCard = [
        { icon: <Icon1 />, title: '해외 마케팅' },
        { icon: <Icon2 />, title: '퍼블리셔' },
        { icon: <Icon3 />, title: '캐드원(제도사)' },
        { icon: <Icon4 />, title: '해외 세일즈' },
        { icon: <Icon5 />, title: '해외 CS' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: true
    };

    return (
        <>
        <div className="mt-40 content-start hidden md:block">
            <Slider {...settings}>
                {dataCard.map((card, index) => (
                    <div key={index} className="">
                        <div className="w-64 bg-[#FFFFFF33] p-3 flex items-center gap-3 rounded-xl">
                            {card.icon}
                            <span className="font-semibold text-xl text-white">{card.title}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <div>
        <div className="md:hidden text-white font-bold relative mt-16 px-5 ">
            <div className="  grid grid-cols-2">
                {dataCard.map((row) => (
                    <div key={row.title} className="flex items-center gap-5">
                        <IconChecklist />
                        {row.title}
                    </div>
                ))}
            </div>
            <p className="text-[#FBFF23] text mt-3 underline">개발자가 필요하신가요?</p>
        </div>
        </div>
    </>

    );
};

export default MovingText;
