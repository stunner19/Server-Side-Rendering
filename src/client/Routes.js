import React from 'react';
import HomePage from './pages/HomePage';
import App from './App';
import UsersListPage, { loadData } from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
        ...App, // App will always be displayed on the screen.
        routes : [
            {
                ...HomePage,    // equivalent to component : Homepage. Check the export statement in the Homepage component.
                path : '/',
                exact : true
            },
            {
                ...UsersListPage,
                path : '/users',
            },
            {
                ...AdminsListPage,
                path : '/admins'
            },
            {
                ...NotFoundPage,
                // no path property means, did not match any of the routes.
            },
        ]
    }
];