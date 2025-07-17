import phonimg from "../assets/Telephon.png";
import {useState} from "react";


const CopyableText = ({ text }) => {
    const [showToast, setShowToast] = useState(false);
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(text).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      });
    };
  
    return (
      <div className="copy-container">
        <h5 onClick={copyToClipboard}>{text}</h5>
        {showToast && <span className="copy-toast">کپی شد!</span>}
      </div>
    );
  };




const Contact = () => {


    return (
        <div className="contact-container">
            <div className="left-section">
                <h1>تماس با ما</h1>
                <div className="cards-container">
                    <div className="card-container">
                        <h4>آدرس:</h4>
                        <h5>اصفهان , مبارکه , خیابان سعدی , روبه روی هایپرمارکت ایلیا</h5>
                    </div>
                    <div className="card-container">
                        <h4>تلفن تماس:</h4>
                        <CopyableText text="09352403786" />
                        <CopyableText text="03152408907" />
                        
                    </div>
                    <div className="card-container">
                        <h4>ایمیل:</h4>
                        <CopyableText text="xmahdi7886@gmail.com" />
                    </div>
                </div>
                <div className="cards-container">
                    <iframe title="Location Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d956.1580353382299!2d51.50941892394233!3d32.34070836259509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1746351395422!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="right-section">
                <img src={phonimg} alt="Phone and desk"/>
            </div>
        </div>
    );
};


export default Contact;