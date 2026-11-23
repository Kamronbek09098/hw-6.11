type BreadcrumbProps = {
    items: string[];
};

export default function Breadcrumb({items}: BreadcrumbProps) {
    return <div className="flex flex-row items-center gap-2 px-6 py-3">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2196F3">
            <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z"/>
        </svg>
        {items.map((item, index) => (
            <div key={item} className="flex flex-row items-center gap-2">
                {index > 0 && <span className="text-[#F7F9FA]/40 text-[9px]">⧗</span>}
                <a href="#" className={`text-[13px] tracking-tight ${index === items.length - 1 ? "text-[#F7F9FA]" : "text-[#F7F9FA]/48 hover:text-[#F7F9FA]"}`}>
                    {item}
                </a>
            </div>
        ))}
    </div>
}
