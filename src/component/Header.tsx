import "./Header.css";

export const Header = () => {
    return (
        <div className="background_green_6" id="header">
            <div id="header-user">
                <div id="header-user-icon" className="icon_user" />
                <div id="header-user-text" className="color_green_1">Molly</div>
            </div>
            <div id="header-logo" className="background_white">
                <div id="header-logo-image" />
            </div>
            <div id="header-social">
                <div className="icon_facebook header-social-icon button_cursor" />
                <div className="icon_twitter header-social-icon button_cursor" />
                <div className="icon_instagram header-social-icon button_cursor" />
            </div>
        </div>
    )
}
