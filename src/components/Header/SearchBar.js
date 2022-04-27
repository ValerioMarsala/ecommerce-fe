import React from 'react'

function SearchBar() {
    return (
        <div style={{ display: "flex" }}>
            <select class="w3-select" name="cat" style={{ width: "20%", border: "1 black solid" }}>
                <option value="" disabled selected>Select Cat</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <input class="w3-input" type="text" placeholder="Cerca...." style={{ width: "70%", display: "flex", textDecoration: "none", border: "1 black solid" }}></input>
            <a href="" style={{ width: "10%", textAlign: "center" }}>
                <i className="fa fa-search" style={{ fontSize: 24, display: "inline-block", verticalAlign: "middle", lineHeight: 1.5 }}></i>
            </a>
        </div>
    )
}

export default SearchBar