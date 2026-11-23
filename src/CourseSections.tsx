import {useState} from "react";
import LessonCard from "./LessonCard.tsx";

const sections = [
    {
        id: 1,
        title: "1. Asosiy donalar",
        lessons: [
            {id: 1, title: "1.1 Kirish", duration: "07:12", icon: "↗️"},
            {id: 2, title: "1.2 Mot qilish", duration: "08:15", icon: "♚"},
            {id: 3, title: "1.2 Piyoda bilan tanishuv", duration: "05:45", icon: "🏆"},
        ],
    },
    {
        id: 2,
        title: "2. Eng ko‘p foydalaniladigan donalar",
        lessons: [
            {id: 1, title: "2.1 Farzin", duration: "06:30", icon: "♛"},
            {id: 2, title: "2.2 Ruh", duration: "05:10", icon: "♜"},
            {id: 3, title: "2.3 Ot", duration: "07:05", icon: "♞"},
        ],
    },
    {
        id: 3,
        title: "3. Mot qilish oson bo‘lgan donalar",
        lessons: [
            {id: 1, title: "3.1 Fil", duration: "04:50", icon: "♝"},
            {id: 2, title: "3.2 Shoh", duration: "06:20", icon: "♚"},
            {id: 3, title: "3.3 Piyoda", duration: "05:55", icon: "♟"},
        ],
    },
];

export default function CourseSections() {
    const [openId, setOpenId] = useState<number | null>(1);

    return <div className="w-full bg-[#1A1D1F] rounded-lg border border-[#F7F9FA]/8 overflow-hidden">
        {sections.map((section) => {
            const isOpen = openId === section.id;

            return <div key={section.id} className="border-b border-[#F7F9FA]/8 last:border-b-0">
                <button
                    onClick={() => setOpenId(isOpen ? null : section.id)}
                    className={`w-full flex flex-row justify-between items-center px-5 py-3.5 cursor-pointer hover:bg-[#F7F9FA]/4 ${isOpen ? "border-b border-[#F7F9FA]/8" : ""}`}
                >
                    <h2 className="text-[#F7F9FA] text-[18px] font-bold">{section.title}</h2>
                    <svg className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                    </svg>
                </button>

                {isOpen && (
                    <div className="grid grid-cols-3 gap-4 p-5">
                        {section.lessons.map((lesson) => (
                            <LessonCard key={lesson.id} title={lesson.title} duration={lesson.duration} icon={lesson.icon}/>
                        ))}
                    </div>
                )}
            </div>
        })}
    </div>
}
