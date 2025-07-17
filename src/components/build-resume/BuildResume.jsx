import { Link } from "react-router-dom";




const BuilResume = () => {
    return (
        <>
            <div class="container-BuilResume" style={{fontFamily: "Vazir"}}>
                <div class="left-section-BuilResume">
                    <h1>یه مسیر سه‌ مرحله‌ای ساده</h1>
                    <ol class="steps">
                        <li>یک الگو از لیست قالب های حرفه ای ما انتخاب کنید.</li>
                        <li>رزومه خود را با امتیازات خاص صنعت ما بسازید.</li>
                        <li>جزئیات را سفارشی کنید و آن را ذخیره کنید. شما آماده ارسال هستید!</li>
                    </ol>
                </div>
                <div class="right-section-BuilResume">
                    <Link to="/resume-builder/builder" class="next-btn" style={{fontFamily: "Vazir"}}>ادامه</Link>
                    <p class="agree-text">
                        با کلیک روی دکمه بالا، شما با <a href="#">شرایط استفاده</a> و <a href="#">سیاست حفظ حریم خصوصی</a> ما موافقت می‌کنید.
                    </p>
                </div>
            </div>
            <div className="footer-BuilResume">
                <div class="footer-links">
                    <a href="#">شرایط و ضوابط</a> |
                    <a href="#">حریم خصوصی</a> |
                    <a href="#">قابلیت دسترسی</a> |
                    <a href="#">تماس با ما</a>
                </div>
                <div class="copyright">
                 .رزومه ساز. تمامی حقوق محفوظ است© 1404 
                </div>
            </div>
        </>
    );
};



export default BuilResume;