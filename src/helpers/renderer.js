import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import serialize  from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';
// renderRoutes is used for the Routes definition of the array that we have changed. 

export default (req,store,context) => {
    // StaticRouter is used for the server as BrowserRouter is used for the browser.
    const content = renderToString(
        <Provider store = {store}>
            <StaticRouter location = {req.path} context = {context}>
                <div>
                    {renderRoutes(Routes)}
                    {/* See how the syntax gets changed now. */}
                </div>
            </StaticRouter>
        </Provider>
    );
     
    return `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id = "root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src = "bundle.js"></script>
            </body>
        </html>
    `;
}