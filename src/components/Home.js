import React from 'react';

const Home = () => (
    <div>
        <h1>React Starter Template</h1>
        <h3>This is my starting template for a React project!</h3>
        <ul>
            <li>React Router</li>
            <li>SASS</li>
            <li>Webpack configured for development</li>
            <li>Babel plugins:</li>
            <ul>
                <a href='https://babeljs.io/docs/plugins/transform-class-properties/'><li>Class properties transform</li></a>
                <a href='https://babeljs.io/docs/plugins/transform-object-rest-spread/'><li>Object rest spread transform</li></a>
            </ul>
        </ul>
    </div>
);

export default Home;