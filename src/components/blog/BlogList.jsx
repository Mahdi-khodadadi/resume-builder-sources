// src/pages/blog/BlogList.jsx
import { Link } from "react-router-dom";
import imgGuide from "../../assets/resume-guide.png";
import imgMistakes from "../../assets/resume-mistakes.png";
import benefitsResume from "../../assets/benefits-of-a-professional-resume.png";
import resumeDegree from "../../assets/resume-vs-degree.png";
import whatResume from "../../assets/what-is-a-resume.png";

const posts = [
  { id: 1, img: imgMistakes, title: "۵ اشتباه رایج در رزومه‌نویسی", slug: "resume-mistakes", shortDesc: "با پرهیز از این ۵ اشتباه رایج در رزومه‌نویسی، شانس استخدام خود را چند برابر کنید و حرفه‌ای‌تر دیده شوید." },
  { id: 2,img: imgGuide, title: "چطور رزومه برنامه‌نویسی بنویسیم؟", slug: "developer-resume", shortDesc: "راهنمای کامل نوشتن یک رزومه حرفه‌ای برای برنامه‌نویسان با تمرکز بر مهارت‌ها، پروژه‌ها و تکنولوژی‌ها."  },
  { id: 3,img: resumeDegree, title: "چرا رزومه خوب مهم‌تر از مدرک تحصیلی است؟", slug: "resume-vs-degree", shortDesc: "در دنیای استخدام امروز، دیگر مدرک دانشگاهی تضمینی برای استخدام نیست. کارفرماها بیشتر به مهارت‌ها، تجربه‌های واقعی و نحوه ارائه شما در رزومه توجه می‌کنند. در این مقاله بررسی می‌کنیم چرا یک رزومه حرفه‌ای می‌تواند از هر مدرکی قوی‌تر عمل کند."  },
  { id: 4,img: benefitsResume, title: "مزایای داشتن یک رزومه حرفه‌ای در بازار کار امروز", slug: "benefits-of-a-professional-resume", shortDesc: "در دنیای رقابتی امروز، رزومه حرفه‌ای می‌تواند کلید ورود به فرصت‌های شغلی عالی باشد."  },
  { id: 5,img: whatResume, title: "رزومه چیست؟ هرآنچه باید درباره رزومه بدانید", slug: "what-is-a-resume", shortDesc: "رزومه خلاصه‌ای از سوابق شغلی، تحصیلی و مهارت‌های فردی است که برای معرفی شما به کارفرما استفاده می‌شود. اما رزومه فقط یک لیست نیست؛ رزومه یک ابزار حرفه‌ای برای نشان‌دادن توانایی‌ها، تجربیات و ارزش‌های شما در بازار کار است."  },
];

const BlogList = () => {
  return (
    <div className="Blog-cards-wrapper">
      {posts.map((post) => (
      <article className="Blog-card" key={post.id}>
          <Link to={`/resume-builder/blog/${post.slug}`} className="Blog-card-container">
              <figure className="Blog-card-image-wrapper">
                  <img className="Blog-img" src={post.img} alt="card 01 omage"/>
              </figure>
              <div className="Blog-card-content">
                  <h1 className="Blog-card-title">{post.title}</h1>
                  <p className="Blog-card-desc">{post.shortDesc}</p>
              </div>
          </Link>
      </article>
      ))}
    </div>
  );
};

export default BlogList;
