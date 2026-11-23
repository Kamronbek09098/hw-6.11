type TopBookItemProps = {
    author: string;
    title: string;
    image: string;
};

export default function TopBookItem({author, title, image}: TopBookItemProps) {
    return <div className="flex flex-row gap-2.5 pr-4">
        <img className="w-13.5 h-20 min-w-13.5 object-cover rounded-lg" src={image} alt={title}/>

        <div className="flex flex-col justify-between pb-4.5">
            <h2 className="text-[14px] font-medium leading-[130%] text-[#FCFCFC] line-clamp-2">{title}</h2>
            <p className="text-[14px] leading-[130%] text-[#F7F9FA66]">{author}</p>
        </div>
    </div>
}
