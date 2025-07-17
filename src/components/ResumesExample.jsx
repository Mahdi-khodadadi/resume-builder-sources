import img1 from "../assets/Resumes/Resume1.png"
import img2 from "../assets/Resumes/Resume2.png"
import img3 from "../assets/Resumes/Resume3.png"
import img4 from "../assets/Resumes/Resume4.png"
import img5 from "../assets/Resumes/Resume5.png"


const ResumesExample = () => {

    const ex = [
        {title: "مدرن", img: img1},
        {title: "مدرن", img: img2},
        {title: "مدرن", img: img3},
        {title: "مدرن", img: img4},
        {title: "مدرن", img: img5}
    ]

    return (
        <div style={{display: "flex",alignItems: "center",margin: "2rem 2rem 5rem 2rem", gap: "5rem", flexDirection: "column"}}>
            {ex.map((R, index) => (
                <div style={{width: "60%"}}>
                    <img style={{width: "100%", height: "100%"}} src={R.img} alt=""/>
                </div>
            ))}
        </div>
    );
};



export default ResumesExample;