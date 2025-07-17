import React, { useState, useContext, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import TabPanel from "../layout/TabPanel";
import { BiContext } from "../context/biContext";
import FirstInfor from "./inforLayout/firstInfor";
import ContactInfor from "./inforLayout/contactInfor";
import Resume1 from "../ResumesTemplates/Resume1"
import Resume2 from "../ResumesTemplates/Resume2"
import Resume3 from "../ResumesTemplates/Resume3"
import Resume4 from "../ResumesTemplates/Resume4"
import Resume5 from "../ResumesTemplates/Resume5"
import Resume100 from "../ResumesVertical/Resume100"
import Resume101 from "../ResumesVertical/Resume101"
import Resume102 from "../ResumesVertical/Resume102"
import Resume103 from "../ResumesVertical/Resume103"
import Resume104 from "../ResumesVertical/Resume104"
import Education from "./inforLayout/education";
import Career from "./inforLayout/career";
import Languages from "./inforLayout/languages";
import Skills from "./inforLayout/skills";
import Projects from "./inforLayout/projects";
import Research from "./inforLayout/research";

const Bi = ({ percentage= 0 }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { form, onFormChange, pishnama, setPishnama, activeTemplate, setForm, image, handleResetAll} = useContext(BiContext);


  if (image) {percentage = percentage + 2}
  if (form.firstName) {percentage = percentage + 2}if (form.lastName) {percentage = percentage + 2}if (form.jobTitle) {percentage = percentage + 2}if (form.year) {percentage = percentage + 2}if (form.DescMe) {percentage = percentage + 2}if (form.email) {percentage = percentage + 2}if (form.mobile) {percentage = percentage + 2}if (form.web) {percentage = percentage + 2}if (form.addCounty) {percentage = percentage + 2}if (form.addProvince) {percentage = percentage + 2}if (form.section) {percentage = percentage + 2}if (form.string) {percentage = percentage + 2}if (form.insTitle) {percentage = percentage + 2}if (form.GPA) {percentage = percentage + 2}if (form.insProvince) {percentage = percentage + 2}if (form.jobPosition) {percentage = percentage + 2}if (form.titleWorkplace) {percentage = percentage + 2}if (form.lanName1) {percentage = percentage + 2}if (form.read1) {percentage = percentage + 2}if (form.write1) {percentage = percentage + 2}if (form.listen1) {percentage = percentage + 2}if (form.speech1) {percentage = percentage + 2}if (form.lanDesc1) {percentage = percentage + 1}if (form.lanName2) {percentage = percentage + 2}if (form.read2) {percentage = percentage + 2}if (form.write2) {percentage = percentage + 2}if (form.listen2) {percentage = percentage + 2}if (form.speech2) {percentage = percentage + 2}if (form.lanDesc2) {percentage = percentage + 1}if (form.skillName1) {percentage = percentage + 2}if (form.skillName2) {percentage = percentage + 2}if (form.skillName3) {percentage = percentage + 2}if (form.skillName4) {percentage = percentage + 2}if (form.skillName5) {percentage = percentage + 2}if (form.skillName6) {percentage = percentage + 2}if (form.sLevel1) {percentage = percentage + 2}if (form.sLevel2) {percentage = percentage + 2}if (form.sLevel3) {percentage = percentage + 2}if (form.sLevel4) {percentage = percentage + 2}if (form.sLevel5) {percentage = percentage + 2}if (form.sLevel6) {percentage = percentage + 2}if (form.proTitle) {percentage = percentage + 2}if (form.resTitle) {percentage = percentage + 2}
  if (form.employer) {percentage = percentage + 1}if (form.relLink) {percentage = percentage + 1}if (form.publisher) {percentage = percentage + 1}if (form.resLink) {percentage = percentage + 1}if (form.addres) {percentage = percentage + 1}if (form.addCity) {percentage = percentage + 1}if (form.telephon) {percentage = percentage + 1}if (form.soldier) {percentage = percentage + 1}if (form.marital) {percentage = percentage + 1}if (form.gender) {percentage = percentage + 1}if (form.provinceWorkplace) {percentage = percentage + 1}if (form.cityWorkplace) {percentage = percentage + 1}if (form.expertise) {percentage = percentage + 1}if (form.insCountry) {percentage = percentage + 1}



  const circleStyle = {
    background: `conic-gradient(#2ecc71 ${percentage}%, #eee ${percentage}% 100%)`
  };

const tabs = [
    {label : "اطلاعات پایه"},
    {label : "سوابق تحصیلی"},
    {label : "سوابق شغلی"},
    {label : "زبان ها"},
    {label : "مهارت‌ها"},
    {label : "پروژه‌ها"},
    {label : "تحقیقات"}
];

const ResumeTemplates = [
  {id: 0, linkName: Resume1},
  {id: 1, linkName: Resume2},
  {id: 2, linkName: Resume3},
  {id: 3, linkName: Resume4},
  {id: 4, linkName: Resume5},
  {id: 100, linkName: Resume100},
  {id: 101, linkName: Resume101},
  {id: 102, linkName: Resume102},
  {id: 103, linkName: Resume103},
  {id: 104, linkName: Resume104}
]


/* --------Pdf----------------------------------------------------------- */
const isVertical = [100, 101, 102, 103, 104].includes(activeTemplate);


const pdfRef = useRef();
const generatePdf = async () => {
  if (!pdfRef.current) return;

  await document.fonts.ready;

  const canvas = await html2canvas(pdfRef.current, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");
  
  // اندازه تصویر برحسب پیکسل
  const imgWidthPx = canvas.width;
  const imgHeightPx = canvas.height;

  // اندازه A4 در mm با نسبت پیکسل
  const pdf = new jsPDF(isVertical ? "p" : "l", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // تناسب ابعاد برای پر شدن صفحه بدون کشیدگی
  const ratio = Math.min(pageWidth / imgWidthPx, pageHeight / imgHeightPx);
  const imgWidth = imgWidthPx * ratio;
  const imgHeight = imgHeightPx * ratio;

  const x = (pageWidth - imgWidth) / 2;
  const y = (pageHeight - imgHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save(`resume-${form.firstName || "no-name"}.pdf`);
};




/* --------Pdf----------------------------------------------------------- */





  const handleSubmit = (e) => {
    e.preventDefault();
    generatePdf();
  };

  const handleNext = () => {
    setActiveTab(activeTab + 1)
  }





  return (
    <form onSubmit={handleSubmit} className="containerBi" style={{height: "auto"}}>
        <div className="rightBi Bi" style={{width: "15%"}}>
          <div className="rp-box">
            <div className="rp-title">رزومه ساز </div>
            <div className="rp-subtitle">میزان پیشرفت رزومه</div>
            <div style={{width:"6rem", height: "6rem"}}>
              <div className="rp-circle-wrapper" style={circleStyle}>
                <div className="rp-circle-inner">
                  <span className="rp-percentage-text">{percentage}%</span>
                </div>
              </div>
            </div>
          </div>
            <div class="bottom-buttons">
                <div className="btn blue" onClick={() => setPishnama(!pishnama)}>پیش‌نمایش</div>
                <div className="btn blue" onClick={handleResetAll}>تنظیم مجدد</div>
            </div>
        </div>

        <MainLayout pishnama={pishnama} setPishnama={setPishnama}>
          <div className="navbarBi">
            <div className="tab-bar">
              {tabs.map((tab,index) => (
                <div key={index} className={`tab ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>{tab.label}</div>
              ))}
            </div>
          </div>
          <TabPanel value={activeTab} index={0}>
              <h1>اطلاعات اولیه</h1>
              <div className="tab-bar">
                <FirstInfor form={form} onFormChange={onFormChange}/>
              </div>
          </TabPanel>
          <TabPanel value={activeTab} index={0}>
              <h1>اطلاعات تماس</h1>
              <div className="tab-bar">
                <ContactInfor form={form} onFormChange={onFormChange}/>
              </div>
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
                <h1>سوابق تحصیلی</h1>
                <div className="tab-bar">
                  <Education form={form} onFormChange={onFormChange}/>
                </div>
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
                <h1>سوابق شغلی</h1>
                <div className="tab-bar">
                  <Career form={form} onFormChange={onFormChange}/>
                </div>
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
                <h1>زبان ها</h1>
                <div className="tab-bar">
                  <Languages form={form} onFormChange={onFormChange} setForm={setForm} />
                </div>
          </TabPanel>
          <TabPanel value={activeTab} index={4}>
                <h1>مهارت ها</h1>
                <div className="tab-bar">
                  <Skills form={form} onFormChange={onFormChange}/>
                </div>
          </TabPanel>
          <TabPanel value={activeTab} index={5}>
                <h1>پروژه ها</h1>
                <div className="tab-bar">
                  <Projects form={form} onFormChange={onFormChange}/>
                </div>
          </TabPanel>
          <TabPanel value={activeTab} index={6}>
                <h1>تحقیقات</h1>
                <div className="tab-bar">
                  <Research form={form} onFormChange={onFormChange}/>
                </div>
          </TabPanel>
        </MainLayout>
        <div className="mainBi Bi" style={{display : pishnama ? "block" : "none"}}>
          <div className="navbarBi" ref={pdfRef} style={{fontFamily: "Vazir"}}>
              {ResumeTemplates.map((R, index) => (
                R.id === activeTemplate ? (<R.linkName key={R.id}/>) : (null)
              ))}
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div className="rightBi Bi dis">
              <div class="bottom-buttons">
                  <div className="btn blue" onClick={() => setPishnama(!pishnama)}>پیش‌نمایش</div>
                  <div className="btn blue" onClick={handleResetAll}>تنظیم مجدد</div>
              </div>
          </div>
          <div className="leftBi Bi dis">
              <Link to="/" class="btn orange">نظر دهید</Link>
              <div class="bottom-buttons">
                  <button type="submit" className="btn blue">دریافت رزومه</button>
                  <div className="btn green" onClick={handleNext}>ذخیره و ادامه</div>
              </div>
          </div>
        </div>
        <div className="leftBi Bi" style={{width: "15%"}}>
            <Link to="/" class="btn orange">نظر دهید</Link>
            <div class="bottom-buttons">
                <button type="submit" className="btn blue">دریافت رزومه</button>
                <div className="btn green" onClick={handleNext}>ذخیره و ادامه</div>
            </div>
        </div>
    </form>
  );
};

export default Bi;
