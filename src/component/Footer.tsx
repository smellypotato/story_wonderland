import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return location.pathname !== "/" ? (
        <div id="footer">
            <div id="footer_back" className="footer_button background_other_9 button_cursor" onClick={ () => navigate(-1) }>
                <div className="footer_button_text color_white">Back</div>
            </div>
            <div id="footer_buttons_right">
                <Link to="/">
                    <div id="footer_home" className="footer_button background_other_9 button_cursor">
                        <div className="footer_button_text color_white">Home</div>
                    </div>
                </Link>
                <div id="footer_menu" className="footer_button background_other_9 button_cursor">
                    <div className="footer_button_text color_white">Menu</div>
                </div>
            </div>
        </div>
    ): null;
}
