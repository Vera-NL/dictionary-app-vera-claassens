import React from "react";

export default function Meaning (props) {
    console.log (props.meaning);
    return (
        <h3>{props.meaning.partOfSpeech}</h3>
    );
}