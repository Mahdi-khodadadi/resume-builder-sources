import { Link } from "react-router-dom";
import img1 from "../../assets/Resumes/Resume1.png";
import img2 from "../../assets/Resumes/Resume2.png";
import img3 from "../../assets/Resumes/Resume3.png";
import img4 from "../../assets/Resumes/Resume4.png";
import img5 from "../../assets/Resumes/Resume5.png";
import img100 from "../../assets/Resumes/Resume100.png";
import img101 from "../../assets/Resumes/Resume101.png";
import img102 from "../../assets/Resumes/Resume102.png";
import img103 from "../../assets/Resumes/Resume103.png";
import img104 from "../../assets/Resumes/Resume104.png";
import { useContext } from "react";
import { BiContext } from "../context/biContext";


const Builder = () => {
    const {setActiveTemplate} = useContext(BiContext);
    const templatesHorizontal = [ /* عمودی */
        {id: 0, title: "قالب مدرن", preview: img1},
        {id: 1, title: "قالب مدرن", preview: img2},
        {id: 2, title: "قالب مدرن", preview: img3},
        {id: 3, title: "قالب مدرن", preview: img4},
        {id: 4, title: "قالب مدرن", preview: img5}
    ]

    const templatesVertical = [ /* افقی */
        {id: 100, title: "قالب مدرن", preview: img100},
        {id: 101, title: "قالب مدرن", preview: img101},
        {id: 102, title: "قالب مدرن", preview: img102},
        {id: 103, title: "قالب مدرن", preview: img103},
        {id: 104, title: "قالب مدرن", preview: img104}
    ]




    return (
        <div className="container-Builder" style={{fontFamily: "Vazir"}}>
            <div className="header-Builder">
                <h2>قالب مورد نظر خود را انتخاب کنید.</h2>
                <h3>قالب های رزومه امکان تغییر رنگ , فونت و اندازه المان هارا دارند.</h3>
            </div>
            <div>
                <div className="templates-select">
                    <h4>قالب های عمودی</h4>
                    <div className="template-select">
                        {templatesHorizontal.map((template,index) => (
                            <Link to="/resume-builder/Bi" className="builder-slider-item" key={template.id} onClick={() => setActiveTemplate(index)}>
                                <div style={{height: "85%"}}>
                                    <img src={template.preview} alt={template.title} style={{height: "100%"}}/>
                                </div>
                                <h5>{template.title}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="templates-select2">
                    <h4>قالب های افقی</h4>
                    <div className="template-select2">
                        {templatesVertical.map((template) => (
                            <Link to="/resume-builder/Bi" className="builder-slider-item2" key={template.id} onClick={() => setActiveTemplate(template.id)}>
                                <div style={{height: "80%"}}>
                                    <img style={{height: "100%"}} src={template.preview} alt={template.title} />
                                </div>
                                <h5>{template.title}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;