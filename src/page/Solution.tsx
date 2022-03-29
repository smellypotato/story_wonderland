import { SolutionChoice } from "../component/SolutionChoice";
import "./Solution.css";

export const Solution = () => {
    return (
        <div id="solution">
            <div id="solution_title" className="color_green_1">The story I want to hear is about</div>
            <div id="solution_tree" className="icon_tree">
                <SolutionChoice solution="patience" />
                <SolutionChoice solution="faithfulness" />
                <SolutionChoice solution="love" />
                <SolutionChoice solution="kindness" />
                <SolutionChoice solution="goodness" />
                <SolutionChoice solution="joy" />
                <SolutionChoice solution="faithfulness" />
                <SolutionChoice solution="gentleness" />
                <SolutionChoice solution="pease" />

                <div id="solution_tree_bush_left" className="solution_bush solution_tree_bush icon_bush_left" />
                <div id="solution_tree_bush_right" className="solution_bush solution_tree_bush icon_bush_right" />
            </div>
            <div id="solution_background">

                <div id="solution_background_bushes">
                    <div id="solution_background_bush_1" className="solution_bush icon_bush_left" />
                    <div id="solution_background_leaves" className="icon_leaves"/>

                </div>
                <div id="solution_background_ground" className="background_green_5" />
            </div>
        </div>
    )
}
