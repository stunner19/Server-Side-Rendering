// babel-polyfill is used for the regenerator runtime. Needs to be included on both the client and the server side.
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import  { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

const app = express();

app.use('/api',proxy('http://react-ssr-api.herokuapp.com',{
    proxyReqOptDecorator(opts){
        opts.header['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));    // all routes with /api will be routed to the ssr url. The second parameter is optional.

app.use(express.static('public'));  // this directory is available to everyone.
app.get('*',(req,res) => {  // * means look for all routes, instead of just a couple of routes.
    const store = createStore();
    
    const promises = matchRoutes(Routes,req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });
    // req.path is the path that the user is trying to visit and returs an array of components about to be rendered.

    Promise.all(promises)
    .then(() => {
        res.send(renderer(req,store)); 
    });
});

app.listen(3000,() => {
    console.log('Listening on port 3000');  
});