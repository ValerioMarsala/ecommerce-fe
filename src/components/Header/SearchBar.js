import React from 'react'

function SearchBar() {
    return (
        <div style={{ display: "flex" }}>
            <select className="w3-select" name="cat" style={{ width: "20%", border: "1px black solid", borderRadius: "25px 0 0 25px" }} defaultValue=''>
                <option value="" style={{textAlign: "center"}} disabled>Select Cat</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <input className="w3-input" type="text" placeholder="Cerca...." style={{ width: "70%", display: "flex", textDecoration: "none", border: "1px black solid", borderRadius: "0 25px 25px 0" }}></input>
            <a href="" style={{ width: "10%", textAlign: "center" }}>
                <i className="fa fa-search" style={{ fontSize: 24, display: "inline-block", verticalAlign: "middle", lineHeight: 1.5 }}></i>
            </a>
        </div>
    )
}

export default SearchBar