import { Link } from "react-router-dom";
import ResumeLogo from "../assets/ResumeLogo.png";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect, useRef} from "react";
import ir from "../assets/flags/ir.png";
import sa from "../assets/flags/sa.png";
import gb from "../assets/flags/gb.png";


const Navbar = () => {

    const [ isOpenResume, setIsOpenResume] = useState(false);
    const [ isOpenLgn, setIsOpenLgn] = useState(false);
    const [ isOpenEbout, setIsOpenEbout] = useState(false);
    const [ isOpenResumeSidebar, setIsOpenResumeSidebar] = useState(false);
    const [ isOpenLgnSidebar, setIsOpenLgnSidebar] = useState(false);
    const [ isOpenEboutSidebar, setIsOpenEboutSidebar] = useState(false);
    const [ hambur, setHambur] = useState(false);
    const menuRef = useRef(null);



    const toggleHambur = () => {
        setHambur(!hambur);
    }

    const toggleDropdown = (e) => {
        if(e.target.innerText === 'رزومه') {
            setIsOpenResume(!isOpenResume);
            setIsOpenLgn(false);
            setIsOpenEbout(false);
        }
        else if(e.target.innerText === 'زبان') {
            setIsOpenLgn(!isOpenLgn);
            setIsOpenEbout(false);
            setIsOpenResume(false);
        }
        else if(e.target.innerText === 'راهنما') {
            setIsOpenEbout(!isOpenEbout);
            setIsOpenResume(false);
            setIsOpenLgn(false);
        }
    }

    const toggleDropdownSidebar = (e) => {
        if(e.target.innerText === 'رزومه') {
            setIsOpenResumeSidebar(!isOpenResumeSidebar);
            setIsOpenLgnSidebar(false);
            setIsOpenEboutSidebar(false);
        }
        else if(e.target.innerText === 'زبان') {
            setIsOpenLgnSidebar(!isOpenLgnSidebar);
            setIsOpenEboutSidebar(false);
            setIsOpenResumeSidebar(false);
        }
        else if(e.target.innerText === 'راهنما') {
            setIsOpenEboutSidebar(!isOpenEboutSidebar);
            setIsOpenResumeSidebar(false);
            setIsOpenLgnSidebar(false);
        }
    }

    const selectLanguage = (lang) => {
        console.log('زبان انتخاب‌شده:', lang);
        setIsOpenResume(false);
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpenResume(false);
                setIsOpenLgn(false);
                setIsOpenEbout(false);
                setHambur(false);
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav class="navbar" ref={menuRef}>
            <button class="hamburger" onClick={toggleHambur}>☰</button>
            <div class="navbar-right">
                <Link to="/resume-builder/build-resume" class="resume-button">رزومه‌ات را بساز</Link>
            </div>
            <div class="overlay" id="overlay" onclick="toggleSidebar()"></div>
            {hambur && (
                <div class="sidebar" id="sidebar">
                    <span></span>
                    <ul>
                        <li><Link to="#" onClick={toggleDropdownSidebar}>رزومه<FaAngleDown style={{height: "1rem", pointerEvents: "none"}} /></Link></li>
                        {isOpenResumeSidebar && (
                            <div className="Rs">
                            <span></span>
                            <Link to="/resume-builder/build-resume" className="optionRs" onClick={() => setIsOpenResume(false)}>رزومه ساز آنلاین</Link>
                            <Link to="/resume-builder/blog/what-is-a-resume" className="optionRs" onClick={() => setIsOpenResume(false)}>رزومه چیست؟</Link>
                            <Link to="/resume-builder/builder" className="optionRs" onClick={() => setIsOpenResume(false)}>قالب های رزومه</Link>
                            <Link to="/resume-builder/ResumesExample" className="optionRs" onClick={() => setIsOpenResume(false)}>نمونه رزومه تکمیل شده</Link>
                            <Link to="/resume-builder/blog" className="optionRs" onClick={() => setIsOpenResume(false)}>بلاگ</Link>
                            </div>
                        )}
                        <li><Link to="/resume-builder/ResumesExample">نمونه رزومه</Link></li>
                        <li><Link to="/resume-builder/builder">قالب رزومه</Link></li>
                        <li><Link to="#" onClick={toggleDropdownSidebar}>زبان<FaAngleDown style={{height: "1rem", pointerEvents: "none"}} /></Link></li>
                        {isOpenLgnSidebar && (
                            <div className="Rs">
                                <span></span>
                                <button onClick={() => selectLanguage('فارسی')} className="option">فارسی<img src={ir} alt=""/></button>
                                <button onClick={() => selectLanguage('English')} className="option">English<img src={gb} alt="" /></button>
                                <button onClick={() => selectLanguage('arabic')} className="option">العربية<img src={sa} alt="" /></button>
                            </div>
                        )}
                        <li><Link to="/resume-builder/blog" >بلاگ</Link></li>
                        <li><Link to="#"onClick={toggleDropdownSidebar}>راهنما<FaAngleDown style={{height: "1rem", pointerEvents: "none"}} /></Link></li>
                        {isOpenEboutSidebar && (
                            <div className="Rs">
                                <span></span>
                                <Link to="/resume-builder/FAQ" className="optionRs" onClick={() => setIsOpenEbout(false)}>سوالات متداول</Link>
                                <Link to="/resume-builder/Contact" className="optionRs" onClick={() => setIsOpenEbout(false)}>تماس با ما</Link>
                                <Link to="/resume-builder/About" className="optionRs" onClick={() => setIsOpenEbout(false)}>درباره ما</Link>
                            </div>
                        )}
                    </ul>
                </div>
            )}

            <ul class="navbar-menu">
                <li><div onClick={toggleDropdown}>رزومه<FaAngleDown style={{height: "1rem", pointerEvents: "none"}} /></div>
                    { isOpenResume && (
                        <div className="options">
                            <span></span>
                            <Link to="/resume-builder/build-resume" className="option" onClick={() => setIsOpenResume(false)}>رزومه ساز آنلاین</Link>
                            <Link to="/resume-builder/blog/what-is-a-resume" className="option" onClick={() => setIsOpenResume(false)}>رزومه چیست؟</Link>
                            <Link to="/resume-builder/builder" className="option" onClick={() => setIsOpenResume(false)}>قالب های رزومه</Link>
                            <Link to="/resume-builder/ResumesExample" className="option" onClick={() => setIsOpenResume(false)}>نمونه رزومه تکمیل شده</Link>
                            <Link to="/resume-builder/blog" className="option" onClick={() => setIsOpenResume(false)}>بلاگ</Link>
                        </div>
                    )}
                </li>
                <li><Link to="/resume-builder/ResumesExample">نمونه رزومه</Link></li>
                <li><Link to="/resume-builder/builder">قالب رزومه</Link></li>
                <li onClick={toggleDropdown}><div >زبان<FaAngleDown style={{height: "1rem", pointerEvents: "none"}} /></div>
                    { isOpenLgn && (
                        <div className="options">
                            <span></span>
                            <button onClick={() => selectLanguage('فارسی')} className="option">فارسی<img src={ir} alt=""/></button>
                            <button onClick={() => selectLanguage('English')} className="option">English<img src={gb} alt="" /></button>
                            <button onClick={() => selectLanguage('arabic')} className="option">العربية<img src={sa} alt="" /></button>
                        </div>
                    )}
                </li>
                <li><Link to="/resume-builder/blog">بلاگ</Link></li>
                <li><div to="" onClick={toggleDropdown}>راهنما<FaAngleDown style={{height: "1rem", pointerEvents: "none"}} /></div>
                    { isOpenEbout && (
                        <div className="options">
                            <span></span>
                            <Link to="/resume-builder/FAQ" className="option" onClick={() => setIsOpenEbout(false)}>سوالات متداول</Link>
                            <Link to="/resume-builder/Contact" className="option" onClick={() => setIsOpenEbout(false)}>تماس با ما</Link>
                            <Link to="/resume-builder/About" className="option" onClick={() => setIsOpenEbout(false)}>درباره ما</Link>
                        </div>
                    )}
                </li>
            </ul>
            <Link to="/resume-builder" class="navbar-left">
                <span class="brand-name"><h4>Resume Builder</h4></span>
                <img src={ResumeLogo} alt="Logo" class="logo" />
            </Link>
        </nav>
    );
};

export default Navbar;