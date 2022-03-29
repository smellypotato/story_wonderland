import "./LibraryChoice.css";

export const LibraryChoice = (props: { name: string, locked: boolean }) => {
    return (
        <div className="library_choice background_green_5 button_cursor">
            <div />
            <div className="library_choice_text color_other_1">{props.name}</div>
            { props.locked &&
                <div className="library_choice_lock background_white">
                    <div className="library_choice_lock_background background_other_12">
                        <div className="library_choice_lock_icon icon_lock"/>
                    </div>
                </div>
            }
        </div>
    )
}
