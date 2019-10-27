import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
    {
        ...HomePage,    // equivalent to component : Homepage. Check the export statement in the Homepage component.
        path : '/',
        exact : true
    },
    {
        ...UsersListPage,
        path : '/users',
    }
];