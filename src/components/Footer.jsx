import { Link } from "react-router-dom";
import ResumeLogo from "../assets/ResumeLogo.png";



const Footer = () => {
    return (
        <footer dir="ltr">
            <div class="footer-container" style={{direction: "rtl", fontFamily: "Vazir"}}>
                <div class="footer-column">
                <div style= {{display: "flex", alignItems: "center", gap: "10px"}}>

                    <img src={ResumeLogo} alt="Envoy Logo" style={{width: "24px", height: "24px"}} />
                    
                    <h2 style={{margin: "0"}}>رزومه ساز</h2>
                </div>
                
                <p class="footer-tagline" style={{marginTop: "16px"}}>
                ما امکانات ایجاد می کنیم<br />برای دنیای متصل.
                </p>
                <p class="footer-tagline" style={{fontWeight: "bold"}}>جسور باش.</p>
                </div>
        
                <div class="footer-column">
                <h3>کاوش کنید</h3>
                <Link to="/resume-builder">خانه</Link><br/>
                <Link to="/resume-builder/About">درباره ما</Link><br/>
                <Link to="/resume-builder/FAQ">سوالات متداول</Link><br/>
                <Link to="/resume-builder/blog">بلاگ</Link>
                </div>
        
                <div class="footer-column">
                <h3>Visit</h3>
                <p>رزومه سازی در ایران</p>
                <p>ایران ,اصفهان ,مبارکه</p>
        
                <h4 style={{marginTop: "15px"}}>ارتباط با ما</h4>
                <p>Xmahdi7886@gmail.com</p>
                <p>09020143786</p>
                </div>
        
                <div class="footer-column">
                <h3>دنبال کنید</h3>
                <a href="https://www.instagram.com/xmahdi7886" target="_blank" rel="noopener noreferrer">اینستاگرام</a><br/>
                <a href="https://t.me/Mahdi_7886" target="_blank" rel="noopener noreferrer">تلگرام</a><br/>
                <a href="mailto:xmahdi7886@gmail.com">ارسال ایمیل</a>
                </div>
        
                <div class="footer-column">
                <h3>قوانین</h3>
                <Link to="#">شرایط</Link><br/>
                <Link to="#">حریم خصوصی</Link>
        
                <div class="footer-next">
                    <p>بعدی: <Link to="#">درباره</Link></p>
                </div>
                </div>
            </div>
        
            <div class="footer-bottom">
                © 1404 .رزومه ساز. تمامی حقوق محفوظ است
            </div>
        </footer>
    )
}


export default Footer;