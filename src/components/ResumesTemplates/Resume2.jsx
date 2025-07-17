import { useContext } from "react";
import { BiContext } from "../context/biContext";





const Resume2 = () => {
    const { form, image } = useContext(BiContext);

    const starSkill = (num) => {
        const full = "★".repeat(num);
        const empty = "☆".repeat(5 - num);
        return <div className="starL" style={{ color: "#f39c12", fontFamily: "sans-serif" }}>{full + empty}</div>;
    }    
    

    return(
        <div className="resume2" dir="rtl">
            <div className="resume2-top-section">
                <div className="resume2-profile-photo" style={{display : (image) ? "block" : "none"}}>
                    <img src={image} alt="Sacha Dubois"/>
                </div>
                <div className="resume2-intro">
                    <h1>{form.firstName}{" "}{form.lastName}</h1>
                    <h2>{form.jobTitle}</h2>
                    <p>{form.DescMe}</p>
                    <p style={{display : (form.day && form.month && form.year) ? "block" : "none"}}><strong>متولد : </strong>{form.day} {form.month} {form.year}</p>
                    <p style={{display : (form.gender && form.marital) ? "block" : "none"}}>{form.gender}{"،"}{form.marital}{"،"}{form.soldier}{" "}</p>
                </div>
                <div className="resume2-intro resume2-column" style={{display : (form.mobile) ? "block" : "none"}}>
                    <h3>تماس با من</h3>
                    <p style={{display : (form.mobile) ? "block" : "none"}}>{form.mobile}{"-"}{form.telephon}</p>
                    <p>{form.email}</p>
                    <p>{form.web}</p>
                    <p style={{display : (form.addCounty && form.addProvince && form.addres) ? "block" : "none"}}>{form.addCounty},{form.addProvince},{form.addCity},{form.addres}</p>
                </div>
            </div>
            <div className="resume2-bottom-section">
                <div className="resume2-row-cloumn" style={{gap: "10px",width: "100%", display: (form.insTitle || form.jobPosition) ? "flex" : "none"}}>
                    <div className="resume2-column" style={{width: "50%", display: (form.insTitle) ? "block" : "none"}}>
                        <h3>سوابق تحصیلی</h3>
                        <div className="resume2-item">
                            <p style={{display : (form.insTitle && form.insProvince) ? "block" : "none"}}>{form.insTitle}{" "}{form.insProvince}</p>
                            <p style={{display : (form.section && form.string) ? "block" : "none"}}>{form.section} رشته {form.string} <p style={{display : (form.GPA) ? "block" : "none"}}>با معدل {form.GPA}</p></p>
                            <p style={{display : (form.loginYear || form.freeYear) ? "block" : "none"}}>{form.login}{form.loginYear} - {form.free}{form.freeYear}</p>
                            <p>{form.educationDesc}</p>
                        </div>
                    </div>
                    <div className="resume2-column" style={{width: "50%", display: (form.jobPosition) ? "block" : "none"}}>
                        <h3>سوابق شغلی</h3>
                        <div className="resume2-item">
                            <p style={{display : (form.jobPosition && form.titleWorkplace) ? "block" : "none"}}>{form.jobPosition}{" در "}{form.titleWorkplace}</p>
                            <p style={{display : (form.countryWorkplace && form.provinceWorkplace) ? "block" : "none"}}>{form.countryWorkplace}، {form.provinceWorkplace}، {form.cityWorkplace}</p>
                            <p style={{display : (form.startWorkYear || form.endWorkYear) ? "block" : "none"}}>{form.startWork}{form.startWorkYear} - {form.endWork}{form.endWorkYear}</p>
                            <p>{form.dutiesDesc}</p>
                        </div>
                    </div>
                </div>
                <div className="resume2-row-cloumn" style={{display: "flex", gap: "10px",width: "100%"}}>
                    <div className="resume2-column" style={{width: "100%", display: (form.lanName1) ? "block" : "none"}}>
                        <h3>زبان ها</h3>
                        <div className="resume2-item" style={{display: "flex", justifyContent: "space-between"}}>
                            <div style={{display : (form.lanName1) ? "block" : "none"}}>
                                <div>{form.lanName1}</div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{fontWeight: "100"}}>مهارت خواندن :</h4>
                                    <div>{starSkill(form.read1)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{fontWeight: "100"}}>مهارت نوشتن :</h4>
                                    <div>{starSkill(form.write1)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{fontWeight: "100"}}>مهارت شنیداری :</h4>
                                    <div>{starSkill(form.listen1)}</div>
                                </div >
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت گفتاری :</h4>
                                    <div>{starSkill(form.speech1)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2px"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>توضیحات :</h4>
                                    <div className="lh" style={{ fontWeight: "100"}}>{form.lanDesc1}</div>
                                </div>
                            </div>
                            <div style={{display : (form.lanName2) ? "block" : "none"}}>
                                <div>{form.lanName2}</div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{fontWeight: "100"}}>مهارت خواندن :</h4>
                                    <div>{starSkill(form.read2)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت نوشتن :</h4>
                                    <div>{starSkill(form.write2)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت شنیداری :</h4>
                                    <div>{starSkill(form.listen2)}</div>
                                </div >
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت گفتاری :</h4>
                                    <div>{starSkill(form.speech2)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2px"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>توضیحات :</h4>
                                    <div className="lh" style={{ fontWeight: "100"}}>{form.lanDesc2}</div>
                                </div>
                            </div>
                            <div style={{display : (form.lanName3) ? "block" : "none"}}>
                                <div>{form.lanName3}</div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت خواندن :</h4>
                                    <div>{starSkill(form.read3)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت نوشتن :</h4>
                                    <div>{starSkill(form.write3)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت شنیداری :</h4>
                                    <div>{starSkill(form.listen3)}</div>
                                </div >
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>مهارت گفتاری :</h4>
                                    <div>{starSkill(form.speech3)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2px"}}>
                                    <h4 className="lh" style={{ fontWeight: "100"}}>توضیحات :</h4>
                                    <div className="lh" style={{ fontWeight: "100"}}>{form.lanDesc3}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume2-row-cloumn" style={{display: (form.skillName1) ? "flex" : "none", gap: "10px",width: "100%"}}>
                    <div className="resume2-column">
                        <h3>مهارت ها</h3>
                        <div className="resume2-item" style={{display: "flex"}}>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontSize: "0.85rem", color: "#1e3b2c"}}>{form.skillName1}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel1) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel1 * 20}%`, background: "rgb(196, 132, 99)"}}></span>
                                </div>
                            </div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontSize: "0.85rem", color: "#1e3b2c"}}>{form.skillName2}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel2) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel2 * 20}%`, background: "rgb(196, 132, 99)"}}></span>
                                </div>
                            </div>
                        </div>
                        <div className="resume2-item" style={{display: "flex"}}>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontSize: "0.85rem", color: "#1e3b2c"}}>{form.skillName3}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel3) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel3 * 20}%`, background: "rgb(196, 132, 99)"}}></span>
                                </div>
                            </div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontSize: "0.85rem", color: "#1e3b2c"}}>{form.skillName4}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel4) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel4 * 20}%`, background: "rgb(196, 132, 99)"}}></span>
                                </div>
                            </div>
                        </div>
                        <div className="resume2-item" style={{display: "flex"}}>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontSize: "0.85rem", color: "#1e3b2c"}}>{form.skillName5}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel5) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel5 * 20}%`, background: "rgb(196, 132, 99)"}}></span>
                                </div>
                            </div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontSize: "0.85rem", color: "#1e3b2c"}}>{form.skillName6}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel6) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel6 * 20}%`, background: "rgb(196, 132, 99)"}}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume2-row-cloumn" style={{display: "flex", gap: "10px",width: "100%"}}>
                    <div className="resume2-column" style={{width: "50%", display: (form.proTitle) ? "block" : "none"}} >
                        <h3>پروژه</h3>
                        <div className="resume2-item">
                            <div style={{display : (form.proTitle || form.employer) ? "block" : "none"}}>
                                <div style={{display : (form.proTitle) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>عنوان : </h4><h5>{form.proTitle}</h5></div>
                                <div style={{display : (form.employer) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>کارفرما/درخواست کننده : </h4><h5>{form.employer}</h5></div>
                            </div>
                            <div style={{display : (form.relLink) ? "block" : "none"}}>
                                <div style={{display : (form.relLink) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>لینک پروژه : </h4><h5>{form.relLink}</h5></div>
                            </div>
                            <div>
                                <div style={{display : (form.proDesc) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>توضیحات : </h4><h5>{form.proDesc}</h5></div>
                            </div>
                        </div>
                    </div>
                    <div className="resume2-column" style={{width: "50%", display: (form.resTitle) ? "block" : "none"}}>
                        <h3>تحقیق</h3>
                        <div className="resume2-item">
                            <div style={{display : (form.resTitle || form.publisher) ? "block" : "none"}}>
                                <div style={{display : (form.resTitle) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>عنوان : </h4><h5>{form.resTitle}</h5></div>
                                <div style={{display : (form.publisher) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>ناشر : </h4><h5>{form.publisher}</h5></div>
                            </div>
                            <div style={{display : (form.resLink) ? "block" : "none"}}>
                                <div style={{display : (form.resLink) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>لینک تحقیق : </h4><h5>{form.resLink}</h5></div>
                            </div>
                            <div>
                                <div style={{display : (form.resDesc) ? "flex" : "none", alignItems: "center", justifyContent: "center", gap: "10px"}}><h4>توضیحات : </h4><h5>{form.resDesc}</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Resume2;