export default function AdBanner() {
    return <div className="relative w-full h-44 rounded-lg overflow-hidden bg-linear-to-br from-[#1565C0] to-[#0D3C7A] p-4 flex flex-col justify-between">
        <div className="absolute top-0 right-0 w-14 h-14 bg-[#FFD600] [clip-path:polygon(0_0,100%_0,100%_100%)]"/>

        <div className="flex flex-row items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#82CC27]"/>
            <p className="text-[#F7F9FA] text-[10px] font-semibold leading-tight">Yoshlar<br/>portali</p>
        </div>

        <h3 className="text-[#F7F9FA] text-[17px] font-bold leading-[125%]">
            Aynan <span className="text-[#FFD600]">siz</span> uchun qanday imtiyozlar borligini bilib oling
        </h3>

        <button className="w-fit h-9 px-6 rounded-lg bg-[#2196F3] hover:bg-[#42A5F5] text-[#F7F9FA] text-[14px] font-medium flex flex-row items-center gap-2 cursor-pointer">
            Batafsil
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 16 16 12 12 8"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
        </button>
    </div>
}
