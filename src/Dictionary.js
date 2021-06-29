import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse (response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse (response) {
        setPhotos(response.data.photos);   
    }

    function search () {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        
        let pexelsApiKey = "563492ad6f91700001000001d9ba34a7359a40a287aed5e304c72e60";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`} }).then(handlePexelsResponse);
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
                            <input type="search"    
                                placeholder="Type a word" 
                                onChange={handleKeywordChange}
                                defaultValue={props.defaultKeyword} />
                            <button className="btn btn-outline-secondary"               
                                    type="submit"
                                    value="search"
                                    autoFocus="off">
                                <i className="fas fa-search"></i>         
                            </button>
                        </div>
                    </form>
                        <div className="Hint">
                            <strong>Suggested words are:</strong> flower, smile, vacation...
                        </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>   
        );
        } else {
            load();
            return "Loading..."
    }
}