// babel-polyfill is used for the regenerator runtime. Needs to be included on both the client and the server side.
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));  // this directory is available to everyone.
app.get('*',(req,res) => {  // * means look for all routes, instead of just a couple of routes.
    const store = createStore();

    // some logic to initialize and load data into the store.
    // load store first and then call renderer.
    
    res.send(renderer(req,store)); 
});

app.listen(3000,() => {
    console.log('Listening on port 3000');  
});