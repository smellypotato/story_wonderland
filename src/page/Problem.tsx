import { useState } from "react";
import { Button } from "../component/Button";
import { ProblemCard } from "../component/ProblemCard";
import "./Problem.css";

enum MOVE {
    LEFT = "-left",
    STILL = "",
    RIGHT = "-right"
}

const emotions = [
    "confused",
    "sad",
    "unsafe",
    "low_self-esteem",
    "angry"
]

export const Problem = () => {
    // const [move, setMove] = useState(MOVE.STILL);
    const [emotion, setEmotion] = useState(0);

    const getEmotion = (position: number) => {
        switch (position) {
            case 0:
                return emotion;
            default:
                return (emotion + emotions.length + position) % emotions.length;
        }
    }

    return (
        <div id="problem">
            <div id="problem_title" className="color_green_1 title">I am feeling ...</div>
            <div id="problems">
                <div id="problem_selection">
                    <ProblemCard currentEmotion={ emotion } index={ -2 } />
                    <ProblemCard currentEmotion={ emotion } index={ -1 } />
                    <div id="problem_card_selected" className="problem_card background_green_5">
                        <div id="problem_left_arrow" className="icon_arrow_left problem_arrow button_cursor" onClick={ () => setEmotion((emotion + emotions.length - 1) % emotions.length) } />
                        <div className={`problem_card_icon icon_${emotions[getEmotion(0)]}`} />
                        <div className="problem_card_text_box">
                            <div className="problem_card_text color_other_1">{ emotions[getEmotion(0)].replace("_", "\n") }</div>
                        </div>
                        <div id="problem_card_selected_shadow" className="background_other_6"/>
                        <div id="problem_right_arrow" className="icon_arrow_right problem_arrow button_cursor" onClick={ () => setEmotion((emotion + 1) % emotions.length) } />
                    </div>
                    <ProblemCard currentEmotion={ emotion } index={ 1 } />
                    <ProblemCard currentEmotion={ emotion } index={ 2 } />
                </div>
            </div>
            <Button text="Next" target="solution" />
        </div>
    )
}
