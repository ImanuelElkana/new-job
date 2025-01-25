import { IconArrowDown } from "./utilits/icon"

const Content1 = () => {
    const content = [
        {title: '평균 월 120만원', desc: '임금을 해당 국가를 기준으로 계산합니다.'},
        {title: '최대 3회 인력교체', desc: '막상 채용해보니 맞지 않아도 걱정하지 마세요. '},
        {title: '평균 3일, 최대 10일', desc: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.'}
    ]
    return (
    <div className="relative text-white">
        <div className="rounded-lg text-[#40E2E8] bg-white p-2 text-2xl font-bold w-fit animate-fadeIn">풀타임, 파트타임</div>
        <IconArrowDown className="h-5 ml-4 -mt-1 w-5 animate-fadeIn" />
        <h1 className="text-2xl lg:text-5xl font-bold mt-5 animate-fadeInUp">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
        <p className="mt-5 text-lg lg:text-2xl font-semibold animate-fadeInUp">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요. 개발자가 필요하신가요?</p>
        <div className="lg:grid hidden grid-cols-3 gap-10 mt-20 animate-fadeIn">
            {content.map((row) => (
                <div key={row.title} className="">
                    <div className="w-[129px] h-[1px] bg-white"></div>
                    <p className="font-bold text-xl mt-4">{row.title}</p>
                    <p className="mt-3 text-[#FFFFFFCC]">{row.desc}</p>
                </div>
            ))}
        </div>
    </div>
    )
}
export default Content1