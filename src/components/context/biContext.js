import { createContext } from "react";


export const BiContext = createContext({
    form: [],
    setForm: () => {},
    onContactChange: () => {},
    pishnama: [],
    setPishnama: () => {},
    activeTemplate: [],
    setActiveTemplate: () => {},
    image: [],
    setImage: () => {},
    handleImageChange: () => {},
    percentage: [],
    setPercentage: () => {},
    handleResetAll: () => {}
})


