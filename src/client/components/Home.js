import React from 'react';

const Home = () => {
    return(
        <div>
            <div>Welcome There!</div>
            <button onClick = {() => console.log('Hi there!')}>Press me!</button>
        </div>
    );
}

export default Home;