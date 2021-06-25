import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse (response) {
        setResults(response.data[0]);
    }

    function search () {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange (event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <form className="Search" onSubmit={handleSubmit}>
                        <div className="input-group" id="input-group">
                            <input type="search" placeholder="Type a word" onChange={handleKeywordChange} />
                            <button className="btn btn-outline-secondary"               
                                    type="submit"
                                    value="search"
                                    autoFocus="off">
                                <i className="fas fa-search"></i>         
                            </button>
                        </div>
                        <div className="Hint">
                            Suggested words are: flower, smile, vacation...
                        </div>
                    </form>
                </section>
                <Results results={results} />
            </div>   
        );
        } else {
            load();
            return "Loading..."
    }
}