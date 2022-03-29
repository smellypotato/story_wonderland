import { Link } from "react-router-dom";
import "./Story.css";

export const Story = () => {
    return (
        <div id="story">
            <div id="story_title" className="color_green_1 title">I want......</div>
            <div id="story_types">
                <Link to="/problem">
                    <div className="story_type background_green_5 button_cursor">
                        <div className="story_type_icon background_other_4">
                            <div className="story_type_icon_image icon_library" />
                        </div>
                        <div className="story_type_text color_other_1">Story Runway Library</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
