import {createSelector} from "reselect";
import {selectRoute} from './route';
import {selectNoteId} from './route';

const selectNotes = state => state.note.list;

export const selectNoteContent = createSelector(
    selectNotes,
    selectNoteId,
    (notes, noteId) => {
        const targetNotes = notes.filter(note => note.id === noteId);
        const content = (targetNotes.length ? targetNotes[0].content : null);

        return content;
    }
);

// @todo shouldn't I apply re-reselect here?
export const selectFilteredNotes = createSelector(
    selectNotes,
    selectRoute,
    (notes, route) => {
        // @todo provide option for filtering by both label and notebook at the same time

        // @todo route analysis
        if (route.primaryFilter === 'labels') {
            return notes.map((note) => ({
                link: `/labels/${route.labelId}/notes/${note.id}`,
                id: note.id,
                name: note.name
            }));
        } else if (route.primaryFilter === 'notebooks') {
            return notes.map((note) => ({
                link: `/notebooks/${route.notebookId}/notes/${note.id}`,
                id: note.id,
                name: note.name
            }));
        } else if (route.primaryFilter === 'notes') {
            return notes.map((note) => ({
                link: `/notes/${note.id}`,
                id: note.id,
                name: note.name
            }));
        }
    }
);
