import './invo.css';
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";
import { ImWhatsapp } from "react-icons/im";

const Invo = () => {
    return(
        <div className='invo-container'>
            <h1 className='invo-title'>Nuestros enlaces:</h1>
            <div className='invo-links-container'>
                <a href="https://www.instagram.com/invodental/"><PiInstagramLogoBold/>Instagram</a>
                <a href="https://www.tiktok.com/@invo_dental"><FaTiktok/> Tik Tok</a>
                <a href="https://www.facebook.com/InvoDental"><FaFacebookF/> Facebook</a>
                <a href="https://api.whatsapp.com/send?phone=5216561032740&text=Hola%2C%20Necesito%20agendar%20una%20cita."><ImWhatsapp /> WhatsApp</a>
            </div>
        </div>
    )
};

export default Invo;