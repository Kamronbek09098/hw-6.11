import CommentItem from "./CommentItem.tsx";

const text = "2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi. Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.\n26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.";

const comments = [
    {id: 1, name: "Jasurbek Narzullayev", avatar: "/odam.jpg", date: "7 Sentyabr 2022 y. 19:52", rating: 4},
    {id: 2, name: "Muhammadamin Domlahonov", avatar: "/odam.jpg", date: "7 Sentyabr 2022 y. 19:52", rating: 3},
    {id: 3, name: "Shoxruh Baxtiyarov", avatar: "/odam.jpg", date: "7 Sentyabr 2022 y. 19:52", rating: 5},
    {id: 4, name: "Jasurbek Narzullayev", avatar: "/odam.jpg", date: "7 Sentyabr 2022 y. 19:52", rating: 4},
];

export default function Comments() {
    return <div className="flex flex-col gap-4">
        <h2 className="text-[#F7F9FA] text-[22px] font-bold">Kurs haqida izohlar</h2>

        <div className="w-full bg-[#1A1D1F] rounded-lg border border-[#F7F9FA]/8 px-5">
            {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    name={comment.name}
                    avatar={comment.avatar}
                    date={comment.date}
                    rating={comment.rating}
                    text={text}
                />
            ))}
        </div>

        <button className="self-center h-10 px-8 rounded-lg bg-[#2A2D30] hover:bg-[#33373A] text-[#F7F9FA] text-[14px] font-medium cursor-pointer">
            Barcha izohlar
        </button>
    </div>
}
