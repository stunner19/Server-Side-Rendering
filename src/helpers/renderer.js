import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
// renderRoutes is used for the Routes definition of the array that we have changed. 

export default (req,store) => {
    // StaticRouter is used for the server as BrowserRouter is used for the browser.
    const content = renderToString(
        <Provider store = {store}>
            <StaticRouter location = {req.path} context = {{}}>
                <div>
                    {renderRoutes(Routes)}
                    {/* See how the syntax gets changed now. */}
                </div>
            </StaticRouter>
        </Provider>
    );
     
    return `
        <html>
            <head></head>
            <body>
                <div id = "root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src = "bundle.js"></script>
            </body>
        </html>
    `;
}