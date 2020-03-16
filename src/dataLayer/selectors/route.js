import {createSelector} from "reselect";

export const selectRoute = state => state.route;

export const selectNoteId = createSelector(
    selectRoute,
    route => route['noteId']
);

/*
export const selectPrimaryFilter = createSelector(
    selectRoute,
    route => route['primaryFilter']
);
*/

// @todo rename
export const selectNavigateThrough = createSelector(
    selectRoute,
    r => {
        const primaryFilter = r['primaryFilter'];
        if (primaryFilter === 'notebooks' && r['notebookId']) {
            return 'notes';
        } else if (primaryFilter === 'notebooks') {
            return 'notebooks';
        } else if (primaryFilter === 'labels' && r['labelId']) {
            return 'notes';
        } else if (primaryFilter === 'labels') {
            return 'labels';
        } else if (primaryFilter === 'notes') {
            return 'notes';
        }
    }
);

// @todo rename
// @todo consider optimizing. Do we have to select both notes and labels?
/*
export const selectParent = createSelector(
    selectRoute,
    r => {
        const primaryFilter = r['primaryFilter'];
        if (primaryFilter === 'notebooks' && r['notebookId']) {

        } else if (primaryFilter === 'labels' && r['labelId']) {

        }

        return null;
    }
);
*/
