import React from 'react';

const Home = () => {
    return(
        <div className = "center-align" style = {{ marginTop : '200px' }}>
            <h3>Welcome</h3>
            <p>Checkout these awesome features.</p>
        </div>
    );
}

// Rather than exporting the component, we will export an object containing the component and the loadData function.
export default {
    component : Home
};