// import { Link } from "react-router-dom";
import { Button } from "../component/Button";
import "./Home.css";

export const Home = () => {
    return (
        <div id="home">
            <div id="home_title" className="color_green_1 title">Story Wonderland</div>
            <Button text="Start Now" target="library" />
            <div id="home_characters">
                <div className="home_character icon_pelican" />
                <div className="home_character icon_dove" />
                <div className="home_character icon_quokka" />
                <div className="home_character icon_pelican" />
                <div className="home_character icon_squid" />
                <div className="home_character icon_pelican" />
            </div>
            <div id="home_grass">
                <div id="home_grass_line" className="icon_grass_line" />
                <div id="home_grass_triangle" className="icon_grass_triangle" />
            </div>
        </div>
    )
}
