type LessonCardProps = {
    title: string;
    duration: string;
    icon: string;
};

export default function LessonCard({title, duration, icon}: LessonCardProps) {
    return <div className="flex flex-col gap-2 cursor-pointer group">
        <div className="relative w-full h-30 rounded-lg border border-[#F7F9FA]/16 bg-linear-to-br from-[#1E2A33] to-[#14181B] overflow-hidden flex items-center justify-center">
            <span className="text-[64px] leading-none group-hover:scale-110 transition-transform">{icon}</span>
            <div className="absolute left-3 bottom-3 flex flex-row items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#F7F9FA" fillOpacity="0.8">
                    <polygon points="6 3 20 12 6 21 6 3"/>
                </svg>
                <p className="text-[#F7F9FA]/72 text-[12px]">{duration}</p>
            </div>
        </div>
        <p className="text-[#F7F9FA] text-[15px] font-medium">{title}</p>
    </div>
}
