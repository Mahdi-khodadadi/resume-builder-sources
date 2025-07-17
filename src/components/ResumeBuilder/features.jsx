import { Link } from "react-router-dom";
import icon1 from '../../assets/icons/1.png';
import icon2 from '../../assets/icons/2.png';
import icon3 from '../../assets/icons/3.png';
import icon4 from '../../assets/icons/4.png';
import icon5 from '../../assets/icons/5.png';
import icon6 from '../../assets/icons/6.png';

const Features = () => {
    return (
        <div class="features-wrapper" style={{fontFamily: "Vazir"}}>
            <div class="features-header">
                <h2>بااستفاده از ابزار هوشمند و کاربرپسند ما مسیر دستیابی به شغل ایده‌آل خود را تا ۴۰٪ سریع‌تر طی کنید.</h2>
                <p>سایت رزومه ساز به شرکت امنیتی پیوسته است. برای کسب اطلاعات بیشتر به بخش <Link to="#" className="underline-link" style={{textDecoration: "none"}}> شرایط استفاده</Link> و <Link to="#" className="underline-link" style={{textDecoration: "none"}}>سیاست حفظ حریم خصوصی </Link>مراجعه فرمایید.</p>
            </div>
            
            <div class="features-section">
                <div class="feature">
                    <img src={icon1} alt="Icon" />
                    <h3>سازنده رزومه پیشرفته</h3>
                    <p>با استفاده از ابزارهای هوشمند و راهنمایی‌های حرفه‌ای، یک رزومه چشم‌گیر بسازید.</p>
                </div>
                <div class="feature">
                    <img src={icon2} alt="Icon" />
                    <h3>قالب‌های مدرن و آماده برای استخدام</h3>
                    <p>از میان بیش از ۲۵ طرح شیک انتخاب کنید که به‌گونه‌ای طراحی شده‌اند تا با سیستم‌های استخدامی سازگار باشند.</p>
                </div>
                <div class="feature">
                    <img src={icon3} alt="Icon" />
                    <h3> به‌سادگی استایل را شخصی‌سازی کنید</h3>
                    <p> <u className="underline-link">فونت‌ها</u> و پالت رنگی را به‌آسانی مطابق سلیقه خود تنظیم کنید تا رزومه‌ای منحصربه‌فرد و چشم‌نواز داشته باشید.</p>
                </div>
                <div class="feature">
                    <img src={icon4} alt="Icon" />
                    <h3>بیش از ۵۰۰ نمونه رزومه رایگان را مرور کنید</h3>
                    <p>به مجموعه‌ای گسترده از نمونه‌رزومه‌ها و راهنماهای گام‌به‌گام دسترسی پیدا کنید تا با اطمینان و به‌صورت حرفه‌ای رزومه خود را بنویسید.</p>
                </div>
                <div class="feature">
                    <img src={icon5} alt="Icon" />
                    <h3> به سیستم‌های ATS استخدام غلبه کنید</h3>
                    <p>از قالب‌های بهینه‌سازی‌شده‌ای استفاده کنید که برای عبور از فیلتر سیستم‌های ردیابی درخواست‌ها (ATS) طراحی شده‌اند تا رزومه‌تان توسط کارشناسان واقعی منابع انسانی دیده شود.</p>
                </div>
                <div class="feature">
                    <img src={icon6} alt="Icon" />
                    <h3> پشتیبانی گام‌به‌گام در ساخت رزومه</h3>
                    <p>در هر مرحله از فرآیند ساخت رزومه — از انتخاب قالب تا مرحله نهایی — از راهنمایی کارشناسان بهره‌مند شوید.</p>
                </div>
            </div>
        </div>
    );
};


export default Features;