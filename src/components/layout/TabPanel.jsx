


const TabPanel = (props) => {
    const {children, value, index, ...others} = props;
    



    return(
        <div className="inforBi" style={{display : value !== index ? "none" : "block"}}  id={`tabpanel-${index}`} aria-labelledby={`sidebar-tab-${index}`} {...others}>
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
};



export default TabPanel;