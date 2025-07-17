import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import BuilResume from './components/build-resume/BuildResume';
import Builder from "./components/build-resume/Builder";
import Bi from './components/build-resume/Bi';
import { BiContext } from './components/context/biContext'; 
import ResumesExample from './components/ResumesExample';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';


const initialFormState = {
  firstName: "", lastName: "", jobTitle: "", gender: "", marital: "", soldier: '',
  day: "", month: "", year: "", DescMe: "", email: "", mobile: "", telephon:"", web: "",
  addCounty: "", addProvince: "", addCity: "", addres:"", section: "", string: "",
  expertise: "", insTitle: "", GPA: "", insCountry: "", insProvince: "", insCity: "",
  login: "", loginYear: "", free: "", freeYear: "", studying: false, educationDesc: "",
  jobPosition: "", titleWorkplace: "", countryWorkplace: "", provinceWorkplace: "",
  cityWorkplace: "", startWork: "", startWorkYear: "", endWork: "", endWorkYear: "",
  busy: "", dutiesDesc: "",
  lanName1: "", lanName2: "", lanName3: "", read1: "", read2: "", read3: "",
  write1: "", write2: "", write3: "", listen1: "", listen2: "", listen3: "",
  speech1: "", speech2: "", speech3: "", lanDesc1: "", lanDesc2: "", lanDesc3: "",
  skillName1: "", skillName2: "", skillName3: "", skillName4: "", skillName5: "", skillName6: "",
  sLevel1: "", sLevel2: "", sLevel3: "", sLevel4: "", sLevel5: "", sLevel6: "",
  proTitle: "", employer: "", relLink: "", proMonth: "", proYear: "", proDesc: "",
  resTitle: "", publisher: "", resLink: "", resMonth: "", resYear: "", resDesc: "",
};

const App = () => {

  const onFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem("resumeForm");
    return savedForm ? JSON.parse(savedForm) : initialFormState;
  });
  
  useEffect(() => {
    localStorage.setItem("resumeForm", JSON.stringify(form));
  }, [form]);
  
  const [pishnama, setPishnama] = useState(() => {
    const saved = localStorage.getItem("pishnama");
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem("pishnama", JSON.stringify(pishnama));
  }, [pishnama]);
  
  const [activeTemplate, setActiveTemplate] = useState(() => {
    const saved = localStorage.getItem("activeTemplate");
    return saved ? JSON.parse(saved) : 0;
  });
  useEffect(() => {
    localStorage.setItem("activeTemplate", JSON.stringify(activeTemplate));
  }, [activeTemplate]);
  
  const [percentage, setPercentage] = useState(() => {
    const saved = localStorage.getItem("percentage");
    return saved ? JSON.parse(saved) : 0;
  });
  useEffect(() => {
    localStorage.setItem("percentage", JSON.stringify(percentage));
  }, [percentage]);
  
  const [image, setImage] = useState(() => {
    const savedImage = localStorage.getItem("resumeImage");
    return savedImage ? savedImage : null;
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      localStorage.setItem("resumeImage", imageUrl);  // ذخیره در localStorage
    }
  };

  const handleResetAll = () => {
    localStorage.removeItem("resumeForm");
    localStorage.removeItem("resumeImage");
    localStorage.removeItem("pishnama");
    localStorage.removeItem("activeTemplate");
    localStorage.removeItem("percentage");
  

    setForm(initialFormState);
    setImage(null);
    setPishnama(false);
    setActiveTemplate(0);
    setPercentage(0);
  };




  return (
    <BiContext.Provider
      value={{
        setForm,
        form,
        onFormChange,
        pishnama,
        setPishnama,
        activeTemplate,
        setActiveTemplate,
        image,
        setImage,
        handleImageChange,
        percentage,
        setPercentage,
        handleResetAll
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/resume-builder" />} />
          <Route path='/resume-builder' element={<ResumeBuilder />} />
          <Route path='/resume-builder/About' element={<About />} />
          <Route path='/resume-builder/Contact' element={<Contact />} />
          <Route path='/resume-builder/FAQ' element={<FAQ />} />
          <Route path='resume-builder/build-resume' element={<BuilResume />} />
          <Route path='resume-builder/builder' element={<Builder />} />
          <Route path='resume-builder/Bi' element={<Bi />} />
          <Route path='resume-builder/ResumesExample' element={<ResumesExample />} />
          <Route path="resume-builder/blog" element={<BlogList />} />
          <Route path="resume-builder/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BiContext.Provider>
  );
};

export default App;









/* 




import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import BuilResume from './components/build-resume/BuildResume';
import Builder from "./components/build-resume/Builder";
import Bi from './components/build-resume/Bi';
import { BiContext } from './components/context/biContext'; 
import { useState } from 'react';
import ResumesExample from './components/ResumesExample';

const App = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    gender: "",
    marital: "",
    soldier: '',
    day: "",
    month: "",
    year: "",
    DescMe: "",
    email: "",
    mobile: "",
    telephon:"",
    web: "",
    addCounty: "",
    addProvince: "",
    addCity: "",
    addres:"",
    section: "",
    string: "",
    expertise: "",
    insTitle: "",
    GPA: "",
    insCountry: "",
    insProvince: "",
    insCity: "",
    login: "",
    loginYear: "",
    free: "",
    freeYear: "",
    studying: false,
    educationDesc: "",
    jobPosition: "",
    titleWorkplace: "",
    countryWorkplace: "",
    provinceWorkplace: "",
    cityWorkplace: "",
    startWork: "",
    startWorkYear: "",
    endWork: "",
    endWorkYear: "",
    busy: "",
    dutiesDesc: "",
    lanName1: "",  lanName2: "",  lanName3: "",
    read1: "",  read2: "",  read3: "",
    write1: "",  write2: "",  write3: "",
    listen1: "",  listen2: "",  listen3: "",
    speech1: "",  speech2: "",  speech3: "",
    lanDesc1: "",  lanDesc2: "",  lanDesc3: "",
    skillName1: "",    skillName2: "",    skillName3: "",    skillName4: "",    skillName5: "",    skillName6: "",
    sLevel1: "",  sLevel2: "",  sLevel3: "",  sLevel4: "",  sLevel5: "",  sLevel6: "",
    proTitle: "", employer: "",relLink: "",proMonth: "",proYear: "",proDesc: "",
    resTitle: "",publisher: "",resLink: "",resMonth: "",resYear: "",resDesc: "",
  });
  const [pishnama, setPishnama] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [percentage, setPercentage] = useState(0);


  const onFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <BiContext.Provider
    value={{
      setForm,
      form,
      onFormChange,
      pishnama,
      setPishnama,
      activeTemplate,
      setActiveTemplate,
      image,
      setImage,
      handleImageChange,
      percentage,
      setPercentage
    }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ResumeBuilder />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/build-resume' element={<BuilResume />} />
          <Route path='/builder' element={<Builder />} />
          <Route path='/Bi' element={<Bi />} />
          <Route path='/ResumesExample' element={<ResumesExample />} />
        </Routes>
        <Footer />
      </div>
    </BiContext.Provider>
  );
}

export default App;
 */