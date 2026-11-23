import {createRoot} from "react-dom/client";
import './styles.css';
// import TopBooks from "./TopBooks.tsx";
import CoursePage from "./CoursePage.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<CoursePage/>);
