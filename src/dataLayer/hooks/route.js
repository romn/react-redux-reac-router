import {routeChange} from '../actions/route';
import store from '../';
import {useLocation} from "@reach/router";
import { useEffect } from 'react';

// @todo describe routes
// @todo make sure both cases with and without tailing slashes work
// const routesRegExp = /((?<rootSection>(notebooks|labels|notes))(\/(?<rootSectionId>[^/]+)(\/(?<subSection>notes)(\/(?<subSectionId>[^/]+))?)?)?)?/;
const routesRegExp = new RegExp('' +
    '(' +
        '(?<rootSection>(notebooks|labels|notes))' +
        '(' +
            '/(?<rootSectionId>[^/]+)' +
            '(' +
                '/(?<subSection>notes)' +
                '(' +
                    '/(?<subSectionId>[^/]+)' +
                ')?' +
            ')?' +
        ')?' +
    ')?'
);

function getRouteFor (location) {
    let route = null;
    const pathname = location.pathname.replace(/(^\/|\/$)/, '');
    const match = pathname.match(routesRegExp);

    // @todo review when we add 'dashboard' entity
    if (match) {
        route = {};
        const groups = match.groups;

        if (groups.rootSection === 'notes') {
            route.primaryFilter = 'notes';
            route.noteId = groups.rootSectionId || null;
        } else if (groups.rootSection === 'notebooks') {
            route.primaryFilter = 'notebooks';
            route.notebookId = groups.rootSectionId || null;
            route.noteId = groups.subSectionId || null;
        } else if (groups.rootSection === 'labels') {
            route.primaryFilter = 'labels';
            route.labelId = groups.rootSectionId || null;
            route.noteId = groups.subSectionId || null;
        } else {
            route.primaryFilter = 'notebooks';
        }

        return route;
    }

    return route;
}

function handleLocationChange (location) {
    const route = getRouteFor(location);
    if (route) {
        store.dispatch(routeChange(route));
        return;
    }

    // @todo handle bad routes
    // @todo parse routes, don't forget to handle pathname for IE
    // @todo provide action to store location in state
}

export default function useRoute () {
    const location = useLocation();
    useEffect(() => handleLocationChange(location));
}

