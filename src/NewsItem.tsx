type NewsItemProps = {
    title: string;
};

export default function NewsItem({title}: NewsItemProps) {
    return <div className="flex flex-col justify-between w-[326px] h-[251px] bg-[#1A1D1F] rounded-lg p-3">
        <img className="w-full h-[113px] object-cover rounded-t-sm" src="/image.png" alt="image"/>
        <p className="text-[14px] text-[#F7F9FA66]">Sentabr 7, 2022</p>
        <h2 className="line-clamp-2 font-[Inter,system-ui] font-semibold text-[14px] text-white">
            {title}
        </h2>
        <p className="line-clamp-2 font-[Inter,system-ui] font-medium text-[14px] text-[#888888]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci harum laudantium
            porro
            provident repudiandae tenetur? Aperiam ducimus eaque, esse minima odit voluptatem!
        </p>
    </div>
}
