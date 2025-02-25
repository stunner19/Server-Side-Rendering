import React from 'react';

// context gets passed as staticContext.
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return(
        <h1>Oops, route not found !!</h1>
    );
};

export default {
    component : NotFoundPage
}