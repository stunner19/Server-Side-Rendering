import React from 'react';

const Home = () => {
    return(
        <div>
            <div>Welcome There!</div>
            <button onClick = {() => console.log('Hi there!')}>Press me!</button>
        </div>
    );
}

// Rather than exporting the component, we will export an object containing the component and the loadData function.
export default {
    component : Home
};