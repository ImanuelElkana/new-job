import { ArrowRight, IconAvatar, IconCode, IconKor, IconSetting, LogoColor } from "./utilits/icon"

const Footer = () => {
    const content = [
        {icon: <IconCode />, desc: '해외 개발자 원격 채용', link: '바로가기'},
        {icon: <IconAvatar />, desc: '외국인 원격 채용 (비개발)', link: '바로가기'},
        {icon: <IconKor />, desc: '한국어 가능 외국인 채용', link: '바로가기'},
        {icon: <IconSetting />, desc: '해외 개발자 활용 서비스', link: '바로가기'},
    ]
    return (
        <div className="bg-[#FBFBFB] px-5 sm:px-0">
            <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mx-auto relative py-20">
                <div className="sm:col-span-2">
                    <LogoColor />
                    <p className="mt-3 font-semibold">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
                    <p className="mt-3 font-semibold">010-0000-0000</p>
                    <p className="mt-3 font-semibold">aaaaa@naver.com</p>
                </div>

                
                {content.map((col) => (
                    <div className="bg-white rounded-lg p-4" key={col.desc} >
                        <div className="my-4">{col.icon}</div>
                        <p>{col.desc}</p>s
                        <div className="flex gap-4 items-center mt-2">
                            {col.link}
                            <ArrowRight />
                        </div>
                    </div>
                ))}
                <div className="mt-10">
                    <p>상호명</p>
                    <p>하이퍼하이어</p>
                    <p className="font-semibold">Hyperhire India Private Limited</p>
                </div>
                <div className="mt-10">
                    <p>대표 CEO</p>
                    <p>김주현</p>
                    <p className="font-semibold">Juhyun Kim</p>
                </div>
                <div className="font-semibold mt-10">
                    <p>사업자등록번호 CIN</p>
                    <p>427-86-01187</p>
                    <p>U74110DL2016PTC290812 </p>
                </div>
                <div className="md:col-span-3 col-span-2 font-semibold mt-10">
                    <p>주소 ADDRESS</p>
                    <p>서울특별시 강남대로 479, 지하 1층 238호 </p>
                    <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 
                    110053 India </p>
                </div>
                <div className="font-semibold mt-10">ⓒ 2023 Hyperhire</div>
            </div>
        </div>
    )
}

export default Footer