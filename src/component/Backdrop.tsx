import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Grass } from '../icon/grass.svg';
import "./Backdrop.css";

export const Backdrop = () => {
    const location = useLocation();

    return (
        <div id="backdrop">
            <div id="backdrop_background">
                {/* <div id="backdrop_grass" className={ `icon_grass` } /> */}
                <div id="backdrop_grass">
                    <Grass width="100%" height="100%" preserveAspectRatio="xMidYMin slice" fill={ location.pathname === "/solution" ? "#D2E4D0" : "#EDF5EC" }/>
                </div>
                { !["/solution", "/library"].includes(location.pathname) && <div id="backdrop_ground" className="icon_ground" /> }
            </div>
        </div>
    )
}
