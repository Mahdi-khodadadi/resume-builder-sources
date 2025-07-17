import { Link } from "react-router-dom";
import ManTakingNote from "../../assets/man-taking-note.png";

const Header = () => {
    return (
        <div class="header">
            <div class="left">
                <h2>توانایی‌های فوق‌العاده‌ای داری<br/>!بیا با یک رزومه شیک نشونش بدیم</h2>
                <p>
                    .رزومه‌ات رو هر زمان خواستی بساز یا ویرایش کن _ بدون محدودیت و دردسر<br/> .با یک تجربه ساده و بدون استرس، به هدفات نزدیک‌تر شو
                </p>
                <p><strong>آماده‌ای؟</strong></p>
                <div class="buttons">
                    <Link to="/resume-builder/build-resume" class="female">ساخت رزومه →</Link>
                </div>
            </div>
            <div class="right">
                <img class="header-photo" src={ManTakingNote} alt="header-photo" />
            </div>
        </div>
    );
};


export default Header;