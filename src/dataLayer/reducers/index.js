import {combineReducers} from "redux";
import notebook from "./notebook";
import label from "./label";
import note from "./note";

export default combineReducers({
    notebook,
    label,
    note
});
