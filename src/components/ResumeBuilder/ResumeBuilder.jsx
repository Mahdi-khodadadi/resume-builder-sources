import Header from "./Header";
import Cards from "./Cards";
import Features from "./features";
import { useContext } from "react";
import { BiContext } from "../context/biContext";



const ResumeBuilder = () => {
    
    const { setActiveTemplate } = useContext(BiContext)


    return(
        <>
            <Header />
            <Features />
            <Cards setActiveTemplate= {setActiveTemplate}/>
        </>
    );
};

export default ResumeBuilder;