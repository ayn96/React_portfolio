import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";  //connect UI and URL
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPhp, FaPython, FaFigma, FaGitAlt, FaBootstrap} from 'react-icons/fa';
import { SiDjango, SiMysql, SiJquery  } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./css/style.css"
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Works from "./Pages/Works";

export default function App() {  
  const menu = [
    {url:"/",text:"Home"},
    {url:"/about",text:"About Me"},
    {url:"/skills",text:"Skills"},
    {url:"/works",text:"Works"},
    {url:"/contact",text:"Contact"}
  ];

  const icons = {
    HTML: <FaHtml5 size={28} color="#E34F26" />,
    CSS: <FaCss3Alt size={28} color="#1572B6" />,
    JavaScript: <FaJs size={28} color="#FFB11B" />,
    React: <FaReact size={28} color="#61DAFB" />,
    PHP: <FaPhp size={28} color="#777BB4" />,
    Python: <FaPython size={28} color="#3776AB" />,
    Figma: <FaFigma size={28} color="#0ACF83" />,  
    Git: <FaGitAlt size={28} color="#F05032" />,
    Django: <SiDjango size={28} color="#092E20" />,
    MySQL: <SiMysql size={28} color="#4479A1" />,
    Bootstrap: <FaBootstrap size={28} color="#7952B3" />,
    JQuery: <SiJquery size={28} color="#0769AD" />
  };

  return (
    <BrowserRouter>
    <Header menu={menu} />
    <Routes>
      <Route path="/" element={<Outlet />}> 
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills icons={icons}/>} />
        <Route path="works" element={<Works icons={icons}/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
