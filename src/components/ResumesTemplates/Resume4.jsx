import { useContext } from "react";
import { BiContext } from "../context/biContext";




const Resume4 = () => {
    const { form, image } = useContext(BiContext);
    const starSkill = (num) => {
        const full = "★".repeat(num);
        const empty = "☆".repeat(5 - num);
        return <div className="starL" style={{ color: "#f39c12", fontFamily: "sans-serif" }}>{full + empty}</div>;
    }    
    return(
        <div className="Resume4" dir="rtl">
            <div className="Resume4-header" style={{justifyContent: "space-between"}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={image} alt="Arjun Singh" style={{display: (image) ? "block" : "none"}}/>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <h1>{form.firstName}{" "}<span>{form.lastName}</span></h1>
                        <h5>{form.jobTitle}</h5>
                        <p style={{display : (form.day && form.month && form.year) ? "block" : "none", marginRight: "15px"}}><strong>متولد : </strong>{form.day} {form.month} {form.year}</p>
                        <p style={{display : (form.gender && form.marital) ? "block" : "none", marginRight: "15px"}}>{form.gender}{"،"}{form.marital}{"،"}{form.soldier}{" "}</p>
                    </div>
                </div>
                <div>
                    <div className="Resume4-contact">
                        {form.email}
                    </div>
                    <div className="Resume4-contact-info">
                        <p style={{display : (form.mobile) ? "block" : "none"}}>{form.mobile}{"-"}{form.telephon}</p>
                        <p>{form.web}</p>
                        <p style={{display : (form.addCounty && form.addProvince && form.addres) ? "block" : "none"}}>{form.addCounty},{form.addProvince},{form.addCity},{form.addres}</p>
                    </div>
                </div>
            </div>
            <div className="Resume4-section" style={{display: (form.insTitle || form.jobPosition) ? "flex" : "none", justifyContent: "space-around"}}>
                <div style={{display:  (form.insTitle) ? "block" : "none", width: "50%"}}>
                    <h2>سوابق تحصیلی</h2>
                    <p style={{display : (form.insTitle && form.insProvince) ? "block" : "none"}}>{form.insTitle}{" "}{form.insProvince}</p>
                    <p style={{display : (form.section && form.string) ? "block" : "none"}}>{form.section} رشته {form.string} <p style={{display : (form.GPA) ? "block" : "none"}}>با معدل {form.GPA}</p></p>
                    <p style={{display : (form.loginYear || form.freeYear) ? "block" : "none"}}>{form.login}{form.loginYear} - {form.free}{form.freeYear}</p>
                    <p>{form.educationDesc}</p>
                </div>
                <div style={{display:  (form.jobPosition) ? "block" : "none", width: "50%"}}>
                    <h2>سوابق شغلی</h2>
                    <p style={{display : (form.jobPosition && form.titleWorkplace) ? "block" : "none"}}>{form.jobPosition}{" در "}{form.titleWorkplace}</p>
                    <p style={{display : (form.countryWorkplace && form.provinceWorkplace) ? "block" : "none"}}>{form.countryWorkplace}، {form.provinceWorkplace}، {form.cityWorkplace}</p>
                    <p style={{display : (form.startWorkYear || form.endWorkYear) ? "block" : "none"}}>{form.startWork}{form.startWorkYear} - {form.endWork}{form.endWorkYear}</p>
                    <p>{form.dutiesDesc}</p>
                </div>
            </div>
            <div className="Resume4-section" style={{display: (form.lanName1 || form.lanName2 || form.lanName3) ? "flex" : "none", justifyContent: "space-around"}}>
                <div style={{width: "100%"}}>
                    <h2>زبان ها</h2>
                    <div className="resume2-item" style={{display: "flex", justifyContent: "space-between", gap: "15px"}}>
                            <div style={{display : (form.lanName1) ? "block" : "none",width: "33.33%"}}>
                                <div>{form.lanName1}</div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت خواندن :</h4>
                                    <div>{starSkill(form.read1)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت نوشتن :</h4>
                                    <div>{starSkill(form.write1)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت شنیداری :</h4>
                                    <div>{starSkill(form.listen1)}</div>
                                </div >
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت گفتاری :</h4>
                                    <div>{starSkill(form.speech1)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2px"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>توضیحات :</h4>
                                    <div className="lhl" style={{ fontWeight: "100"}}>{form.lanDesc1}</div>
                                </div>
                            </div>
                            <div style={{display : (form.lanName2) ? "block" : "none",width: "33.33%"}}>
                                <div>{form.lanName2}</div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت خواندن :</h4>
                                    <div>{starSkill(form.read2)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت نوشتن :</h4>
                                    <div>{starSkill(form.write2)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت شنیداری :</h4>
                                    <div>{starSkill(form.listen2)}</div>
                                </div >
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت گفتاری :</h4>
                                    <div>{starSkill(form.speech2)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2px"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>توضیحات :</h4>
                                    <div className="lhl" style={{ fontWeight: "100"}}>{form.lanDesc2}</div>
                                </div>
                            </div>
                            <div style={{display : (form.lanName3) ? "block" : "none",width: "33.33%"}}>
                                <div>{form.lanName3}</div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت خواندن :</h4>
                                    <div>{starSkill(form.read3)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت نوشتن :</h4>
                                    <div>{starSkill(form.write3)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت شنیداری :</h4>
                                    <div>{starSkill(form.listen3)}</div>
                                </div >
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>مهارت گفتاری :</h4>
                                    <div>{starSkill(form.speech3)}</div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "2px"}}>
                                    <h4 className="lhl" style={{ fontWeight: "100"}}>توضیحات :</h4>
                                    <div className="lhl" style={{ fontWeight: "100"}}>{form.lanDesc3}</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Resume4-section" style={{display: (form.skillName1 || form.skillName2 || form.skillName3 || form.skillName4 || form.skillName5 || form.skillName6 ) ? "block" : "none"}}>
                <h2>مهارت ها</h2>
                <div className="resume2-item" style={{display: "flex"}}>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontWeight: "100"}}>{form.skillName1}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel1) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel1 * 20}%`, background: "rgb(42 93 102)"}}></span>
                                </div>
                            </div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontWeight: "100"}}>{form.skillName2}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel2) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel2 * 20}%`, background: "rgb(42 93 102)"}}></span>
                                </div>
                            </div>
                        </div>
                        <div className="resume2-item" style={{display: "flex"}}>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontWeight: "100"}}>{form.skillName3}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel3) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel3 * 20}%`, background: "rgb(42 93 102)"}}></span>
                                </div>
                            </div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontWeight: "100"}}>{form.skillName4}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel4) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel4 * 20}%`, background: "rgb(42 93 102)"}}></span>
                                </div>
                            </div>
                        </div>
                        <div className="resume2-item" style={{display: "flex"}}>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontWeight: "100"}}>{form.skillName5}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel5) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel5 * 20}%`, background: "rgb(42 93 102)"}}></span>
                                </div>
                            </div>
                            <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "50%"}}>
                                <h4 style={{fontWeight: "100"}}>{form.skillName6}</h4>
                                <div className="Resume5-bar" style={{width: "80%", display : (form.sLevel6) ? "block" : "none"}}>
                                    <span style={{width: `${form.sLevel6 * 20}%`, background: "rgb(42 93 102)"}}></span>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="Resume4-section" style={{display: (form.proTitle || form.resTitle) ? "flex" : "none", justifyContent: "space-around"}}>
                <div style={{display: (form.proTitle) ? "block" : "none", width: "50%"}}>
                    <h2>پروژه</h2>
                        <div className="resume2-item" style={{display: "flex",flexDirection: "column", alignItems: "flex-start",gap: "3px"}}>
                            <div style={{display : (form.proTitle || form.employer) ? "flex" : "none",flexDirection: "column", alignItems: "flex-start",gap: "3px"}}>
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
                <div style={{display: (form.resTitle) ? "block" : "none", width: "50%"}}>
                    <h2>تحقیق</h2>
                        <div className="resume2-item" style={{display: "flex",flexDirection: "column", alignItems: "flex-start",gap: "3px"}}>
                            <div style={{display : (form.resTitle || form.publisher) ? "flex" : "none",flexDirection: "column", alignItems: "flex-start",gap: "3px"}}>
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
    );
};


export default Resume4;