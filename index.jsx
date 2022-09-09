import React from 'react';

const wishes = [
    { text: 'Travel to the moon', done: false},
    { text: 'Pay the gym', done: true},
    { text: 'Go to the gym', done: true},
]

const ReactDOM = () => (
    <div>
        <h1>My wishlist</h1>
        <fieldset>
            <legend>New wish</legend>
            <input placeholder="Enter your wish here" />
        </fieldset>
        <ul>

        </ul>
    </div>,

    document.getElementById('root'),
);