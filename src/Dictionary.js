import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleKeywordChange (event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    function search (event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`)
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