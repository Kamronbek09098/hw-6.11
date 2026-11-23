import TopBookItem from "./TopBookItem.tsx";

const books = [
    {id: 1, author: "J.Silman", title: "Shaxmatdagi qobiliyatlaringizga qayta baxo bering", image: "/book2.png"},
    {id: 2, author: "A.Nimzowitsch", title: "Mening tizimim", image: "/book.png"},
    {id: 3, author: "D.Bronstein", title: "Zurixdagi shaxmat musobaqasi", image: "/rasm.png"},
    {id: 4, author: "B.Fischer", title: "Mening esdaqolarlik o‘yinlarim", image: "/book3.png"},
];

export default function TopBooks() {
    return <div className="w-[326px] bg-[#1A1D1F] rounded-lg py-4 pl-4">
        <div className="flex flex-row justify-between items-center mb-5 pr-5">
            <h2 className="text-[18px] font-medium leading-[130%] text-[#FCFCFC]">Top kitoblar</h2>
            <a href="#" className="flex flex-row items-center gap-2 text-[16px] leading-[130%] text-[#F7F9FA66] no-underline">
                Barchasi
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M1.5 1L6.5 6L1.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>

        <div className="flex flex-col">
            {books.map((book) => (
                <div key={book.id} className="py-3 first:pt-0 last:pb-0 border-b border-white/6 last:border-b-0">
                    <TopBookItem author={book.author} title={book.title} image={book.image}/>
                </div>
            ))}
        </div>
    </div>
}
