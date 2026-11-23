import IconAndText from "./IconAndText.tsx";

function CourseHeader() {
  const rating = 4;
  const reviews = 234;
  const purchased = false;
  const ratingArray = Array.from({length: 5});

  return <div className="w-full h-40 bg-linear-to-r from-[#0F1A24] via-[#12283A] to-[#0F1A24] rounded-lg border-[#F7F9FA]/8 border p-6 flex flex-row justify-between">
    <div className="flex flex-col justify-between h-full">

      <div className="flex flex-col gap-1">
        <h1 className="text-[#F7F9FA] text-[24px] font-bold">Shaxmat donalari bilan tanishuv</h1>
        <div className="flex flex-row items-center gap-2">
          <img className="w-6 h-6" src="/price.svg" alt="icon"/>
          <p className="text-[#F7F9FA] text-[16px] font-bold">55 000.00 uzs</p>
          <p className="text-[#F7F9FA]/64 text-[12px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <IconAndText icon="/beginner.svg" text="Boshlang‘ich"/>
        <IconAndText icon="/category.svg" text="4 ta bo‘lim"/>
        <IconAndText icon="/author.svg" text="24 ta dars"/>
      </div>
    </div>

    <div className="flex flex-col justify-between items-end h-full">
        <div className="flex flex-row items-center gap-3">
            <div className="flex flex-row gap-1">
                {ratingArray.map((_, index) => (
                    <img key={index} className="w-5 h-5" src={index < rating ? "/star-filled.svg" : "/star-empty.svg"} alt="star"/>
                ))}
            </div>
            <div className="flex flex-row items-baseline gap-1">
                <p className="text-[#F7F9FA] text-[16px] font-bold">{rating.toFixed(1)}</p>
                <p className="text-[#F7F9FA]/64 text-[12px]">({reviews} ta izoh)</p>
            </div>
        </div>

        <div className="flex flex-row items-center gap-3">
            {purchased ? (
                <div className="flex flex-row items-center gap-2 mr-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#82CC27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <p className="text-[#82CC27] text-[16px] font-medium">Sotib olingan</p>
                </div>
            ) : (
                <button className="h-10 px-8 rounded-lg bg-[#2196F3] hover:bg-[#42A5F5] text-[#F7F9FA] text-[16px] font-medium cursor-pointer">
                    Kursni sotib olish
                </button>
            )}
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#F7F9FA]/24 hover:bg-[#F7F9FA]/8 cursor-pointer">
                {purchased ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                )}
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#F7F9FA]/24 hover:bg-[#F7F9FA]/8 cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F7F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
            </button>
        </div>
    </div>
  </div>;
}

export default CourseHeader;
