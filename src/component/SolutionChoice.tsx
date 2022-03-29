import { Link } from "react-router-dom";
import "./SolutionChoice.css";

export const SolutionChoice = (props: { solution: string }) => {
    return (
        <Link to="/library">
            <div id={ `solution_choice_${props.solution}` } className={ `solution_choice icon_solution_${props.solution} button_cursor` }>
                <div className="solution_choice_text background_other_10 color_other_11">{ props.solution }</div>
            </div>
        </Link>
    )
}
