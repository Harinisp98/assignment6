import React from 'react';

function WordList(props) {

    const words = props.words;
    const items = words.map((word, idx) =>
        <li key={idx}>{word}</li>
    );

    return (
        <div>
            <h2>list of fruits</h2>
            <ul>{items}</ul>
        </div>
    );
}

export default WordList;
