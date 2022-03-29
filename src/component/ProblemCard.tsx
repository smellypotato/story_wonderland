import "./ProblemCard.css";
const emotions = [
    "confused",
    "sad",
    "unsafe",
    "low_self-esteem",
    "angry"
]
export const ProblemCard = (props: { currentEmotion: number, index: number }) => {
    const getEmotion = (position: number) => {
        switch (position) {
            case 0:
                return props.currentEmotion;
            default:
                return (props.currentEmotion + emotions.length + position) % emotions.length;
        }
    }
    return (
        <div className={ `problem_card background_other_5` }>
            <div className={`problem_card_icon icon_${emotions[getEmotion(props.index)]}`} />
            <div className="problem_card_text_box">
                <div className="problem_card_text color_green_9">{ emotions[getEmotion(props.index)].replace("_", "\n") }</div>
            </div>
        </div>
    )
}
