import {combineReducers} from "redux";
import notebook from "./notebook";
import label from "./label";
import note from "./note";
import auth from './auth';
import route from './route';

export default combineReducers({
    notebook,
    label,
    note,
    auth,
    route
});
