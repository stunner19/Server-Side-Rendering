import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));  // this directory is available to everyone.
app.get('*',(req,res) => {  // * means look for all routes, instead of just a couple of routes.
   res.send(renderer(req)); 
});

app.listen(3000,() => {
    console.log('Listening on port 3000');  
});