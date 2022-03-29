import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BUTTON_TYPE } from "../enum";
import "./Button.css";

export const Button = (props: { text: string, icon?: string, size: number, target: string }) => {
    const [buttonType, setButtonType] = useState(BUTTON_TYPE.MAIN);

    return (
        <Link to={ `/${props.target} ` }>
            <div className={ `button button_${buttonType} button_cursor` } onMouseEnter={ () => setButtonType(BUTTON_TYPE.HIGHLIGHT) } onMouseLeave={ () => setButtonType(BUTTON_TYPE.MAIN) }>
                <div className={ `button_knob button_knob_${buttonType}` } /><div /><div className={ `button_knob button_knob_${buttonType}` } />
                <div /><div className="button_text color_other_1 no_highlight" style={ { fontSize: `${props.size}em` } }>{ props.text }</div><div />
                <div className={ `button_knob button_knob_${buttonType}` } /><div /><div className={ `button_knob button_knob_${buttonType}` } />
            </div>
        </Link>
    )
}
Button.defaultProps = {
    size: 10.5,
    type: BUTTON_TYPE.MAIN
}
