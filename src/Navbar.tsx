const links = ["Asosiy", "Yangiliklar", "Kurslar", "Kutubxona", "Bog‘lanish"];

export default function Navbar() {
    const active = "Asosiy";

    return <nav className="w-full h-16 bg-[#1A1D1F] rounded-xl border border-[#F7F9FA]/8 px-5 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4">
            <a href="#" className="text-[22px] font-bold font-serif leading-none">
                <span className="text-[#F7F9FA]">Uz</span><span className="text-[#F7F9FA]/60">Chess</span>
            </a>
            <div className="w-px h-6 bg-[#F7F9FA]/16"/>
            <button className="flex flex-row items-center gap-2 text-[#F7F9FA] text-[14px] cursor-pointer">
                O‘zbekcha
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
        </div>

        <ul className="flex flex-row items-center gap-8">
            {links.map((link) => (
                <li key={link}>
                    <a href="#" className={`block py-1 text-[14px] border-b-2 ${link === active ? "text-[#F7F9FA] border-[#2196F3]" : "text-[#F7F9FA]/72 border-transparent hover:text-[#F7F9FA]"}`}>
                        {link}
                    </a>
                </li>
            ))}
        </ul>

        <div className="flex flex-row items-center gap-5">
            <button className="cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            </button>
            <button className="cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
            </button>
            <button className="cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
            </button>
            <div className="w-px h-6 bg-[#F7F9FA]/16"/>
            <div className="flex flex-row items-center gap-2">
                <p className="text-[#F7F9FA] text-[14px]">Jasurbek Pulatov</p>
                <img className="w-8 h-8 rounded-full object-cover" src="/odam.jpg" alt="avatar"/>
            </div>
        </div>
    </nav>
}
