import { Link } from "react-router-dom";
import Tigerimage1 from "../../assets/Resumes/Resume100Main.png";
import Tigerimage2 from "../../assets/Resumes/Resume101Main.png";
import Tigerimage3 from "../../assets/Resumes/Resume102Main.png";
import Tigerimage4 from "../../assets/Resumes/Resume103Main.png";
import Tigerimage5 from "../../assets/Resumes/Resume104Main.png";



const Cards = ({setActiveTemplate}) => {

    const cardsOption = [
        {  
            shortDescription : "آماده‌اید رزومه‌ای بسازید که شما را از دیگران متمایز کند؟",
            description: "رزومه‌ساز ما به شما کمک می‌کند در کمتر از چند دقیقه یک رزومه حرفه‌ای و چشم‌نواز طراحی کنید. با قالب‌های متنوع، قابلیت شخصی‌سازی بالا و امکانات پیشرفته، دیگر نیازی به صرف ساعت‌ها وقت برای طراحی رزومه نخواهید داشت.",
            img : Tigerimage1,
            dir: "rtl",
            id: 100
        },
        {  
            shortDescription : "یک قدم تا ساخت رزومه‌ای حرفه‌ای فاصله دارید",
            description: "رزومه، اولین تصویری‌ست که از شما در ذهن کارفرما نقش می‌بندد.با رزومه‌ساز ما، می‌توانید در چند دقیقه رزومه‌ای دقیق، منظم و تاثیرگذار بسازید که شخصیت حرفه‌ای شما را به‌خوبی نمایش دهد.",
            img : Tigerimage2,
            dir : "ltr",
            id: 101
        },
        {  
            shortDescription : "رزومه‌سازی سریع، هوشمند و حرفه‌ای",
            description: "وقت خود را صرف طراحی نکنید!رزومه‌ساز ما با ابزارهای ساده و قالب‌های جذاب، به شما کمک می‌کند در کمترین زمان، یک رزومه استاندارد و حرفه‌ای بسازید که آمادگی ارسال به هر فرصت شغلی را دارد.",
            img : Tigerimage3,
            dir : "rtl",
            id: 102
        },
        {  
            shortDescription : "رزومه‌ای بسازید که دقیقاً مناسب شماست",
            description: "کارفرماها در چند ثانیه تصمیم می‌گیرند — رزومه شما باید بدرخشد!با رزومه‌سازی حرفه‌ای ما، یک معرفی قوی، ساختار یافته و چشم‌گیر ارائه دهید و فرصت‌های شغلی را از آن خود کنید.",
            img : Tigerimage4,
            dir : "ltr",
            id : 103
        },
        {  
            shortDescription : "به رزومه‌تان اعتبار حرفه‌ای بدهید",
            description: "رزومه‌ای که حرفه‌ای نوشته و طراحی شده باشد، شانس شما را برای استخدام چند برابر می‌کند.با رزومه‌ساز ما، بدون نیاز به تجربه طراحی، یک رزومه کامل، شیک و مورد پسند کارفرمایان بسازید.",
            img : Tigerimage5,
            dir : "rtl",
            id: 104
        }
    ];

    return (
        <div className="cards" style={{fontFamily: "Vazir"}}>
            {cardsOption.map((card, index) => (
                <div key={index} className="card fade-in-section" dir={card.dir}>
                    <div className="mockup">
                        <Link to="/resume-builder/Bi" key={card.id} onClick={() => setActiveTemplate(card.id)} className="mock img-mockup">
                            <img src={card.img} alt={`image${card.id}`} />                                
                        </Link>
                    </div>
                    <div className="text-content" dir="ltr">
                        <h1>{card.shortDescription}</h1>
                        <p dir="rtl">{card.description}</p>
                        <Link to="/resume-builder/Bi" key={card.id} onClick={() => setActiveTemplate(card.id)}>.همین حالا رزومه خود را بسازید</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Cards;