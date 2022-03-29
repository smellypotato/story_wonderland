import { LibraryChoice } from "../component/LibraryChoice";
import "./Library.css";

export const Library = () => {
    return (
        <div id="library">
            <div id="library_title" className="color_green_1 title">I like to read</div>
            <div id="library_choices">
                <LibraryChoice name="The Jungle Book" locked={ false } />
                <LibraryChoice name="Little Red Hood" locked={ true } />
                <LibraryChoice name="The Wonderful Wizard of Oz" locked={ false } />
                <LibraryChoice name="The Story of Doctor Dolittle" locked={ true } />
                <LibraryChoice name="Peter Pan" locked={ false } />
                <LibraryChoice name="The Borrowers" locked={ false } />
                <LibraryChoice name="Anne of Green Gables" locked={ false } />
                <LibraryChoice name="The Family" locked={ true } />
                <LibraryChoice name="3 Little Pigs" locked={ true } />
                <LibraryChoice name="Little Red Hood" locked={ false } />
            </div>
        </div>
    )
}
