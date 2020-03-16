// import {createSelector} from 'reselect';

export function selectLabels(state) { return state.label.list; }

// export const selectLabelById = createSelector(
//     selectLabels,
//     (state, id) => id,
//     (labels, id) => labels.filter(lb => lb.id === id)
// );
