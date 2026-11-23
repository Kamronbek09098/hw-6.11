type IconAndTextProps = {
    icon: string;
    text: string;
};

function IconAndText({icon, text}: IconAndTextProps) {
    return <div className="flex flex-row gap-1 items-center">
        <img src={icon} alt="icon"/>
        <p className="text-[#F7F9FA]/60 text-[14px]">{text}</p>
    </div>
}

export default IconAndText
