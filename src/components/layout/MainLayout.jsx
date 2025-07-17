


const MainLayout = ({children,setPishnama,pishnama}) => {
    return (
        <div className="mainBi Bi" style={{display : pishnama ? "none" : "block"}}>
            {children}
        </div>
    );
};

export default MainLayout;


