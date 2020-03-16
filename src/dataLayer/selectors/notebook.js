// import {createSelector} from 'reselect';

export function selectNotebooks(state) { return state.notebook.list; }

// export const selectNotebookById = createSelector(
//     selectNotebooks,
//     (state, id) => id,
//     (notebooks, id) => notebooks.filter(nb => nb.id === id)
// );

