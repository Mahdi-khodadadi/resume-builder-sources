import { useState } from "react";
import headerImg from "../assets/FAQ.png"; 


const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
          question: "چطور می‌تونم رزومه بسازم؟",
          answer: "بعد از ورود به حساب، روی 'رزومه جدید' کلیک کن و مراحل رو دنبال کن.",
        },
        {
          question: "آیا می‌تونم رزومه‌هامو ذخیره کنم؟",
          answer: "بله، رزومه‌ها به‌طور خودکار در حساب شما ذخیره می‌شن و هر زمان قابل ویرایش هستن.",
        },
        {
          question: "چطور رزومه رو به صورت PDF دانلود کنم؟",
          answer: "پس از تکمیل رزومه، گزینه 'دانلود PDF' برات فعال می‌شه.",
        },
        {
          question: "آیا می‌تونم چند رزومه متفاوت بسازم؟",
          answer: "بله، می‌تونی چندین رزومه بسازی و بین‌شون جابجا شی.",
        },
        {
          question: "آیا قالب‌های مختلفی برای رزومه وجود داره؟",
          answer: "بله، چندین قالب حرفه‌ای با امکان سفارشی‌سازی در دسترسته.",
        },
        {
          question: "آیا استفاده از سایت رایگانه؟",
          answer: "نسخه رایگان موجوده، اما برخی امکانات ویژه فقط در نسخه حرفه‌ای فعاله.",
        },
        {
          question: "آیا اطلاعات من امنه؟",
          answer: "بله، اطلاعات شما با امنیت بالا ذخیره و محافظت می‌شه.",
        },
      ];



    return (
        <div className="faq-container">
            <div className="faq-header">
                <img src={headerImg} alt="FAQ Icon" className="faq-icon" />
                <h1>سؤالات متداول</h1>
                <p>اگر سوالت اینجا نیست، حتماً بهمون پیام بده!</p>
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="faq-question">
                            {faq.question}
                                <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
      </div>
    );
};


export default FAQ;