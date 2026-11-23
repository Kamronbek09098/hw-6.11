import {useState} from "react";

type CommentItemProps = {
    name: string;
    avatar: string;
    date: string;
    rating: number;
    text: string;
};

export default function CommentItem({name, avatar, date, rating, text}: CommentItemProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const ratingArray = Array.from({length: 5});

    return <div className="relative flex flex-col gap-3 py-4 border-b border-[#F7F9FA]/8 last:border-b-0">
        <div className="flex flex-row justify-between items-start">
            <div className="flex flex-row items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt={name}/>
                <div className="flex flex-col">
                    <h3 className="text-[#F7F9FA] text-[16px] font-medium">{name}</h3>
                    <div className="flex flex-row items-center gap-3">
                        <p className="text-[#F7F9FA]/64 text-[13px]">{date}</p>
                        <div className="flex flex-row gap-0.5">
                            {ratingArray.map((_, index) => (
                                <img key={index} className="w-4 h-4" src={index < rating ? "/star-filled.svg" : "/star-empty.svg"} alt="star"/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`w-8 h-8 flex items-center justify-center rounded-md cursor-pointer hover:bg-[#F7F9FA]/8 ${menuOpen ? "bg-[#2196F3]/16" : ""}`}
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill={menuOpen ? "#2196F3" : "#F7F9FA"}>
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                </svg>
            </button>
        </div>

        {menuOpen && (
            <button className="absolute right-0 top-13 z-10 flex flex-row items-center gap-2 px-3 py-2 bg-[#1A1D1F] border border-[#F7F9FA]/8 rounded-lg shadow-lg text-[#F7F9FA] text-[14px] cursor-pointer hover:bg-[#25292C]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFC107">
                    <path d="M12 2L1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2V9h2v4z"/>
                </svg>
                Shikoyat qilish
            </button>
        )}

        <p className="text-[#F7F9FA] text-[14px] leading-[150%] whitespace-pre-line">{text}</p>
    </div>
}
