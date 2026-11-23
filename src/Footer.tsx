const links = ["Biz haqimizda", "Cookie fayllari siyosati", "Foydalanish qoidalari", "Cookie fayllari siyosati"];

const socials = [
    {id: 1, name: "instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},
    {id: 2, name: "telegram", path: "M22 3L2 11l6 2 2 7 3-4 5 4 4-17zM9 13l9-6-7 8"},
    {id: 3, name: "youtube", path: "M23 7.5a3 3 0 0 0-2-2C19 5 12 5 12 5s-7 0-9 .5a3 3 0 0 0-2 2C.5 9.5.5 12 .5 12s0 2.5.5 4.5a3 3 0 0 0 2 2c2 .5 9 .5 9 .5s7 0 9-.5a3 3 0 0 0 2-2c.5-2 .5-4.5.5-4.5s0-2.5-.5-4.5zM9.75 15.5v-7l6 3.5-6 3.5z"},
    {id: 4, name: "twitter", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"},
    {id: 5, name: "facebook", path: "M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7v-7h-2v-3h2V9.5A3.5 3.5 0 0 1 15.5 6H18v3h-2a1 1 0 0 0-1 1v2h3l-.5 3H15v7h4a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"},
];

export default function Footer() {
    return <footer className="w-full bg-[#1A1D1F] mt-12">
        <div className="flex flex-col items-center gap-4 py-7">
            <a href="#" className="text-[22px] font-bold font-serif leading-none">
                <span className="text-[#F7F9FA]">Uz</span><span className="text-[#F7F9FA]/60">Chess</span>
            </a>
            <ul className="flex flex-row items-center gap-7">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="#" className="text-[#F7F9FA]/80 text-[13px] hover:text-[#F7F9FA]">{link}</a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-row items-center gap-4">
                {socials.map((social) => (
                    <a key={social.id} href="#" aria-label={social.name} className="opacity-80 hover:opacity-100">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F7F9FA">
                            <path d={social.path}/>
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    </footer>
}
