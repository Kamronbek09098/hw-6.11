import Navbar from "./Navbar.tsx";
import Breadcrumb from "./Breadcrumb.tsx";
import CourseHeader from "./CourseHeader.tsx";
import CourseSections from "./CourseSections.tsx";
import AdBanner from "./AdBanner.tsx";
import Comments from "./Comments.tsx";
import Footer from "./Footer.tsx";

export default function CoursePage() {
    return <div className="min-h-screen bg-[#111315] font-[Poppins,system-ui] text-white">
        <div className="max-w-300 mx-auto px-6 pt-4">
            <Navbar/>
            <Breadcrumb items={["Asosiy", "O‘rganish", "Shaxmat donalari bilan tanishuv"]}/>
            <CourseHeader/>

            <div className="flex flex-row gap-6 mt-10">
                <div className="flex-1 min-w-0 flex flex-col gap-10">
                    <CourseSections/>
                    <Comments/>
                </div>
                <div className="w-72 shrink-0">
                    <AdBanner/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
}
