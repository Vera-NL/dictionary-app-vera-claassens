import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleResponse (response) {
        console.log(response.data[0]);
    }

    function search (event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_UK/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange (event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form className="search" onSubmit={search}>
                <div className="input-group">
                    <input type="search" placeholder="Type a word" onChange={handleKeywordChange} />
                    <button className="btn btn-outline-secondary"               
                            type="submit"
                            value="search"
                            autoFocus="off">
                           <i className="fas fa-search"></i>         
                    </button>
                </div>
            </form>
        </div>   
    );
}