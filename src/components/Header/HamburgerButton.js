import React from 'react'

function HamburgerButton() {
    /*
    const w3_open = () => { document.getElementById("hamburgerNav").classList.remove("w3-hide"); console.log("displayHam");}
    const w3_close = () => { document.getElementById("hamburgerNav").classList.add("w3-hide");  console.log("hideHam")}
    */
    const w3_open = () => { document.getElementById("hamburgerNav").style.display = "block !important"; console.log("displayHam");}
    const w3_close = () => { document.getElementById("hamburgerNav").style.display = "none !important";  console.log("hideHam")}

    const styles = {
        hamburger: {display: "none !important"}
      };

    return (
        <div>
            <button className="w3-button w3-large" onClick={w3_open}>&#9776;</button>
            <nav style={styles.hamburger} className="w3-sidebar w3-bar-block w3-collapse" id="hamburgerNav" >
                <button className="w3-bar-item w3-button"
                    onClick={w3_close}>Close &times;</button>
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
            </nav>
        </div>
    )
}

export default HamburgerButton